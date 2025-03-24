import React from 'react';
import { BaseToast, ErrorToast } from 'react-native-toast-message';

// Configuração da aparência para toasts de sucesso e erro
const toastConfig = {
    success: (props: any) => (
        <BaseToast
            {...props}
            style={{
                borderLeftColor: "#4CAF50",
                backgroundColor: "#e8f5e9",
                borderRadius: 8,
            }}
            contentCointainerStyle={{ paddingHorizontal: 15}}
            text1Style={{
                fontSize: 16,
                fontWeight: "bold",
                color: "#2e7d32",
            }}
            text2Style={{
                fontSize: 14,
                color: "#388e3c",
            }}
        />
    ),

    error: (props: any) => (
        <ErrorToast
            {...props}
            style={{
                borderLeftColor: "#f44336",
                backgroundColor: "#ffebee",
                borderRadius: 8,
            }}
            contentContainerStyle={{ paddingHorizontal: 15}}
            text1Style={{
                fontSize: 16,
                fontWeight: "bold",
                color: "#c62828",
            }}
            // Aumenta o limite de linhas e permite quebra de texto
            text2NumberOfLines={3}
            text2Style={{
                fontSize: 14,
                color: "#b71c1c",
                flexWrap: "wrap",
            }}
        />
    ),
};

export default toastConfig;