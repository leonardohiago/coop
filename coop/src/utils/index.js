export function validarTamanhoArquivo(arquivo) {
  console.log(arquivo);
  const size = arquivo.size / 1024 / 1024
  if (size > 2) {
    return false;
  }

  return true;
}

export function validarExtensaoArquivo(arquivo) {
  if (!['image/jpeg', 'image/png'].includes(arquivo.type)) {
    return false;
  }

  return true;
}
