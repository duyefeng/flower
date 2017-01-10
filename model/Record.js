var Sequelize = require('sequelize');  


// 建立数据库连接
var sequelize = new Sequelize(  
    'canvas', // 数据库名  
    'root',   // 用户名  
    'root',   // 用户密码  
    {  
        'dialect': 'mysql',  // 数据库使用mysql  
        'host': 'localhost', // 数据库服务器ip  
        'port': 3306,        // 数据库服务器端口  
        'define': {  
            // 字段以下划线（_）来分割（默认是驼峰命名风格）  
            'underscored': true  
        }  
    }  
);

var User = sequelize.define('node_articles_comment',  
    {   
        cid: {  
            field: 'cid',      
            type: Sequelize.INTEGER(11),  
            allowNull: false  
        },  
        name: {  
            field: 'name',  
            primaryKey: true,  
            type: Sequelize.CHAR(255),  
            allowNull: false  
        },  
        content: {  
            field: 'content',  
            type: Sequelize.TEXT(),  
            allowNull: false  
        },  
        created_at: {  
            field: 'created_at',  
            type: Sequelize.CHAR(20),  
            allowNull: false  
        },  
        aid: {  
            field: 'aid',  
            type: Sequelize.INTEGER(10),  
            allowNull: false  
        }
    },  
    {  
        tableName: 'node_articles_comment',  
        freezeTableName: true ,
        timestamps: false
    }  
);  
module.exports = User;