export const TOKEN_KEY = '&app-token';
export const ID_USUARIO = '&id-usuario';
export const NOME_USUARIO = '&nome-usuario';
export const TIPO_USUARIO = '&tipo-usuario';

export const login = token => {
    localStorage.setItem(TOKEN_KEY,token);
}

export const logout = () => {
    localStorage.clear ()

}

export const setId = id => localStorage.setItem(ID_USUARIO, id);

export const getId = () => localStorage.getItem(ID_USUARIO);

export const setNome = nome => localStorage.setItem(NOME_USUARIO, nome);

export const getNome = () => localStorage.getItem(NOME_USUARIO);