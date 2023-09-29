const ThemeChangeBtn = ({ darkThemeEnabled, setDarkThemeEnabled }) => {
  return (
    <div>
      <button
        id="change-theme-btn"
        onClick={() => setDarkThemeEnabled(!darkThemeEnabled)}
      >
        dark
      </button>
    </div>
  );
};

export default ThemeChangeBtn;
