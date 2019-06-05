import React from 'react';

export const AuthContex = React.createContext(); // tiene un valor por defecto
export const AuthProvider = AuthContex.Provider; // Debe ser llamado como padre de todos los consumers ...
export const AuthConsumer = AuthContex.Consumer; // Se llama en los componentes dede se va user como un static

// Eg
/**
 * static contexType = AuthContext;
 * 
 * this.contex
 */