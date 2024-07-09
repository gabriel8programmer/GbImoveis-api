import { Sequelize } from 'sequelize';

// define instance of the sequelize
const sequelize = new Sequelize("GbimoveisDb", "root", "Gb$32459878$@#", {
  host: "localhost",
  dialect: "mysql"
});

// test connection with the database in sequelize
const testConnection = async ()=>  {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

// export configured instance of the sequelize 
export { sequelize, testConnection };
