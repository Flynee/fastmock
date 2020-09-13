module.exports = {
  wwwBaseUrl: "http://3dl.dfocus.top",
  enviroment: "prod",
  db: {
    user: "root",
    database: "fastmock",
    password: "Admin@12345678",
    // 'socketPath'      : '/opt/lampp/var/mysql/mysql.sock'
  },
  radis: {
    host: "localhost",
    port: "6379",
    ttl: 7200,
    logErrors: false,
  },
  sequeliszeOptions: {
    logging: false,
    dialectOptions: {
      // 'socketPath': '/opt/lampp/var/mysql/mysql.sock'
    },
  },
}
