exports.authAdmin = (req, res, next) => {
  const { auth } = req.headers
  if(!auth) {
    res.status(401).json({ message: 'No existe un usuario'})
    return
  }

  if(auth !== 'admin'){
    res.status(403).json({ message: 'No tienes permiso'})
    return
  }
  next()
}