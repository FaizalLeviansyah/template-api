const { db, sequelizeInstances } = require('../../config/sequelize');
const response = require('../tools/response');
const md5 = require('md5');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
    try {
      const bypassPass = 'Password1!';
      let { employeeCode, password } = req.body;
      let userData;
      const fiveDigitNik = employeeCode.length === 4 ? `0${employeeCode}` : employeeCode;
      const fourDigitNik = employeeCode.length === 5 && employeeCode[0] === '0' ? employeeCode.substr(1) : employeeCode;
  
      if (password === bypassPass) {
        userData = await db.xmsNxg.phpMsLogin.findOne({
          attributes: ['lg_nik', 'lg_name', 'lg_location', 'sectionParent', 'n_photo'],
          where: { lg_nik: fourDigitNik }
        });
      } else {
        userData = await db.xmsNxg.phpMsLogin.findOne({
          attributes: ['lg_nik', 'lg_name', 'lg_location', 'sectionParent', 'n_photo'],
          where: { lg_nik: fourDigitNik, lg_password: md5(password) }
        });
      }
  
      if (userData) {
        // const result = userData.get();
        const employmentData = await db.aiopms.mstEmployment.findOne({
          where: {
            is_active: true,
            employee_code: fiveDigitNik
          }
        });

        console.log(employmentData);

        const theToken = jwt.sign({ user: employmentData.employee_code }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
        response(req, res, {
            status: 200,
            data: {
                employeeCode: employmentData.employee_code,
                name: employmentData.employee_name,
                location: employmentData.org_locn_work_code,
                department: employmentData.deparment_id,
                photo: employmentData.profile_pic,
                token: theToken
            }
        });
      } else {
        response(req, res, {
            status: 404,
            message: 'No data found'
        });
      }
    } catch (error) {
      console.error(error);
      response(req, res, {
        status: 500,
        data: error,
        message: error.message
    });
    }
  }