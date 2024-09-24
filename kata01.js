// Fonction filterByTitle qui prend en paramètre un tableau de films et une chaîne recherchée
function filterByTitle(movies, searchedTitle) {
    var lowerCaseSearchedTitle = searchedTitle.toLowerCase();
    return movies.filter(function (movie) {
        return movie.title.toLowerCase().indexOf(lowerCaseSearchedTitle) !== -1;
    });
}
// Exemple de données
var recentMovies = [
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
var filteredMovies = filterByTitle(recentMovies, "The");
console.log(filteredMovies);
