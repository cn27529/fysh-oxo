// config.js
export const config = {
  // Grid settings
  gridSize: 6, // number of grid cells
  gridCellSize: 100, // size of each grid cell in pixels

  // Mole settings
  moleAppearanceTime: 1000, // time in milliseconds for mole to appear
  moleDisappearTime: 500, // time in milliseconds for mole to disappear
  moleSpeed: 2, // speed of mole movement (higher value means faster)

  // Game settings
  gameDuration: 60, // game duration in seconds
  scoreIncrement: 1, // score increment for each mole hit

  // Theme settings
  themeBackground: "#f7f7f7", // background color of the game
  gridBackground: "#ccc", // background color of the grid cells
  moleImage: "mole.png", // image file for the mole

  // Button settings
  startButtonLabel: "Start Game",
  endButtonLabel: "End Game",
};
