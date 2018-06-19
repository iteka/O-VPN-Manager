module.exports = {
  dir: '/opt/vpn_ca',
  port: 8808,
  cert: {
    country: 'UA',    // 2 letter code
    province: 'UA',   // 2 letter code
    city: 'Kiev',  // city
    org: 'DigitalResistance',   // organisation name
    email: 'kasper.php@gmail.com',  //contact email
    ou: 'IT'         // organisation unit name
  },
  servers: {
    adm: {
      name: 'Админ VPN',
      desc: 'Пользователи этого vpn имеют полный доступ к серверу по адресу 10.1.0.1, включая ssh.\nНа странице http://10.1.0.1 доступна панель управления vpn ключами.\nРазные пользователи, подключившиеся к этому серверу, попадают в единую локальную сеть, внутри которой у них есть доступ друг к другу через внутренние ip адреса.\nЭтот vpn сервер не подключён к интернету, поэтому при подключении к нему интернет отсутсвует. ',
      code: 'adm',
      logs: true,
      type: 'root', //public/root/dark
      friends: true,
      maxclients: 100,
      network: {
        host: '0.0.0.0',
        remote: '', //ip set automatically 
        intranet: '10.1.0.0/24',
        port: 1194,
        mport: 2294,
        proto: 'udp',
        dev: 'tun0',
      },
      // certificate overrides, if required
      //cert: {
      //}
    },
    inet: {
      name: 'Интернет VPN',
      desc: 'Пользователи этого vpn попадают в интернет напрямую с сервера. У них отсутсвует доступ к любым администраторским возможностям, они не видят друг-друга в одной локальной сети.\nВо "внешнем интернете" IP адрес пользователя определяется как IP адрес сервера.',
      code: 'inet',
      logs: true,
      type: 'public', //public/root/dark
      friends: false,
      maxclients: 100,
      network: {
        host: '0.0.0.0',
        remote: '', //ip set automatically 
        intranet: '10.3.0.0/24',
        port: 1196,
        mport: 2296,
        proto: 'udp',
        dev: 'tun2',
      },
      // certificate overrides, if required
      //cert: {
      //}
    }
  }
}
