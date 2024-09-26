// Définir un tableau de produits
const products = [
    {
        name: "Produit 1",
        description: "Voici un petit descriptif du produit 1. Il est de haute qualité et très utile.",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Produit 2",
        description: "Voici un petit descriptif du produit 2. Il est très apprécié.",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Produit 3",
        description: "Voici un petit descriptif du produit 3. Un choix parfait pour tous.",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Produit 4",
        description: "Voici un petit descriptif du produit 4. Il est très populaire.",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Produit 5",
        description: "Voici un petit descriptif du produit 5. Il est très demandé.",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Produit 6",
        description: "Voici un petit descriptif du produit 6. Il est très recherché.",
        image: "https://via.placeholder.com/150"
    }
];

// Fonction pour générer les cartes de produit
function generateProductCards() {
    const container = document.getElementById('product-container');

    products.forEach(product => {
        // Créer un élément de carte
        const card = document.createElement('div');
        card.className = 'card';

        // Ajouter l'image
        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;

        // Ajouter le titre
        const title = document.createElement('h2');
        title.textContent = product.name;

        // Ajouter la description
        const description = document.createElement('p');
        description.textContent = product.description;

        // Ajouter le bouton
        const button = document.createElement('button');
        button.textContent = 'En savoir plus';

        // Ajouter tous les éléments à la carte
        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(button);

        // Ajouter la carte au conteneur
        container.appendChild(card);
    });
}

// Appeler la fonction pour générer les cartes
generateProductCards();
