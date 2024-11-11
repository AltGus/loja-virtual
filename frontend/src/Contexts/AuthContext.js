import React, { createContext, useState, useEffect } from 'react';

// Criação do contexto
const AuthContext = createContext();

// Componente Provider para fornecer o contexto
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Função para simular login
    const login = async (email, password) => {
        // Aqui você pode adicionar a lógica de autenticação
        const fakeUser = { id: 1, name: 'Usuário Teste', email };
        setUser(fakeUser);
        setLoading(false);
    };

    // Função para simular logout
    const logout = () => {
        setUser(null);
    };

    useEffect(() => {
        // Lógica para verificar se o usuário já está autenticado
        setLoading(false);
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
