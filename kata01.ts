// Définir le type Movie pour chaque objet du tableau
interface Movie {
    title: string;
    releaseDate: string;
    actors: string[];
  }
  
  // Fonction filterByTitle qui prend en paramètre un tableau de films et une chaîne recherchée
  function filterByTitle(movies: Movie[], searchedTitle: string): Movie[] {
    const lowerCaseSearchedTitle = searchedTitle.toLowerCase();
  
    return movies.filter(movie => 
      movie.title.toLowerCase().indexOf(lowerCaseSearchedTitle) !== -1
    );
  }
  
  
  // Exemple de données
  const recentMovies: Movie[] = [
    {
      title: "The Great Adventure",
      releaseDate: "2023-07-15",
      actors: ["Alex Johnson", "Samantha Bloom", "Michael Cane"]
    },
    {
      title: "Lost in Time",
      releaseDate: "2023-05-22",
      actors: ["Clara Hughes", "Robert Smith", "Emily Stone"]
    },
    {
      title: "Mystery of the Blue Ocean",
      releaseDate: "2023-08-30",
      actors: ["Henry Gold", "Natalie Port", "Bruce Wayne"]
    },
    {
      title: "Cybernetic",
      releaseDate: "2023-09-12",
      actors: ["Aaron Stark", "Lisa Ray", "Jeremy Irons"]
    },
    {
      title: "The Hidden World",
      releaseDate: "2023-10-05",
      actors: ["Sophia Loren", "Daniel Craig", "Emma Watson"]
    }
  ];
  
  // Exemple d'utilisation
  const filteredMovies = filterByTitle(recentMovies, "The");
  console.log(filteredMovies);
  