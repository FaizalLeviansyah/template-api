const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phpMsLogin', {
    lg_nik: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true
    },
    lg_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lg_password: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lg_department: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lg_location: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lg_product: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lg_email_aio: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lg_email_private: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lg_update: {
      type: DataTypes.DATE,
      allowNull: true
    },
    lg_propose: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    lg_admin: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    lg_retur: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    lg_retur_admin: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    lg_level: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lg_type: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lg_ga: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    lg_aktif: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    lg_costcenter: {
      type: DataTypes.CHAR(8),
      allowNull: true
    },
    protean_location: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    protean_department: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lg_profitcenter: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lg_corp_cc: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    tgl_rfc: {
      type: DataTypes.DATE,
      allowNull: true
    },
    lg_faktur: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    lg_claim_track: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    n_photo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    n_phone: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    n_level: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    n_info: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ifi_level: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    beclaim_level: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cms_level: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    qc_level: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    invoice_level: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    visit_level: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    paper_level: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    apps_aktif: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    beclaim_kjy_level: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ifi_kjy_level: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    invoice_kjy_level: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    beclaim_ho_level: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lg_entitas: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ihelprpt_level: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rfid: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    section: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sectionParent: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    categoryShift: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    isCS: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    facebook_URL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    instagram_URL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    limaes_level: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iot_skb: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lims_oto: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    gmp_apps: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    gen_apps: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_telegram: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    head1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    head2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    head3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    isEmployee: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    apar_apps: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    qa_apk: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    role_wp: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    qa_lims_al4: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'phpMsLogin',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PK_phpMsLogin",
        unique: true,
        fields: [
          { name: "lg_nik" },
        ]
      },
    ]
  });
};
