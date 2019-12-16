test('is dark mode working', () => {
    const darkmodeBtn = getByText('Dark Mode');
    const darkModeOn = getByText('Dark mode on!')

    fireEvent.cleck(darkmodeBtn);

    expect(darkModeOn).hasTextContent();
})