const suggestions = [];

function displaySuggestions() {
    const suggestionsContainer = document.getElementById('suggestions-container');
    suggestionsContainer.innerHTML = ''; // Clear previous suggestions
    suggestions.forEach((suggestion, index) => {
        const suggestionItem = document.createElement('div');
        suggestionItem.className = 'suggestion-item';
        suggestionItem.innerText = suggestion;
        suggestionsContainer.appendChild(suggestionItem);
    });
}

document.getElementById('submit-button').addEventListener('click', () => {
    const suggestionInput = document.getElementById('suggestion-input');
    const suggestionText = suggestionInput.value.trim();
    
    if (suggestionText) {
        suggestions.push(suggestionText);
        suggestionInput.value = ''; // Clear the input
        displaySuggestions(); // Update the displayed suggestions
    } else {
        alert('Please enter a suggestion before submitting.');
    }
});

// Initial display of suggestions (if any)
displaySuggestions();