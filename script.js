const toggleInfo = (index, event) => {
    setVisibleLightIndexes((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i!== index);
      } else {
        return [...prev, index];
      }
    });
    const clickedElement = event.target.closest(".chauvetLights");
    if (clickedElement) {
      clickedElement.classList.toggle("expanded");
    }
    toggleBackgroundColor(event);
  
    // Update the content of a specific element
    const mainElement = document.getElementById("main"); // Replace with the ID of the element you want to update
    const newText = "New content goes here!"; // Replace with the new content you want to display
    mainElement.innerHTML = newText;
  };
