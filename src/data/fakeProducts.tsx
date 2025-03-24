// Estrutura de dados para representar um produto
export interface Product {
    name: string;
    description: string;
    price: number;
    imageUrl: string | null;
  }

  // Simula uma 'chamada a API' que retorna uma lista de produtos fixos
  export function loadFakeProducts(): Product[] {
    return [
      {
        name: "Bluetooth Headphones",
        description: "Noise-cancelling wireless headphones with long battery life.",
        price: 149.9,
        imageUrl: "https://t3.ftcdn.net/jpg/03/21/33/56/360_F_321335646_MssvTODbKsOXioQnKPS7TIroydea3O3F.jpg",
      },
      {
        name: "Mechanical Keyboard",
        description: "Tactile switches and customizable RGB backlight.",
        price: 299.9,
        imageUrl: null,
      },
      {
        name: "27'' Monitor",
        description: "High-resolution display with 144Hz refresh rate.",
        price: 1299.9,
        imageUrl: null,
      },
    ];
  }
  