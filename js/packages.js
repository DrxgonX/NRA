// Packages page JavaScript

let allPackages = [];
let filteredPackages = [];

document.addEventListener('DOMContentLoaded', function() {
    allPackages = [...tourPackages];
    filteredPackages = [...allPackages];
    
    // Check for URL parameters
    const urlDest = getUrlParameter('dest');
    if (urlDest) {
        document.getElementById('destination-filter').value = urlDest;
    }
    
    // Load packages
    filterPackages();
    
    // Populate package select for booking form
    populatePackageSelect();
});

// Filter packages based on selected filters
function filterPackages() {
    const category = document.getElementById('category-filter').value;
    const destination = document.getElementById('destination-filter').value;
    const duration = document.getElementById('duration-filter').value;
    const sortBy = document.getElementById('sort-filter').value;
    
    // Start with all packages
    let filtered = [...allPackages];
    
    // Apply filters
    if (category !== 'all') {
        filtered = filterByCategory(filtered, category);
    }
    
    if (destination !== 'all') {
        filtered = filterByDestination(filtered, destination);
    }
    
    if (duration !== 'all') {
        filtered = filterByDuration(filtered, duration);
    }
    
    // Sort
    filtered = sortPackages(filtered, sortBy);
    
    // Update filtered packages
    filteredPackages = filtered;
    
    // Display results
    displayPackages(filtered);
    updateResultsText(filtered.length);
}

// Display packages
function displayPackages(packages) {
    const container = document.getElementById('all-packages');
    const noResults = document.getElementById('no-results');
    
    if (!container) return;
    
    if (packages.length === 0) {
        container.style.display = 'none';
        if (noResults) noResults.style.display = 'block';
        return;
    }
    
    container.style.display = 'grid';
    if (noResults) noResults.style.display = 'none';
    
    container.innerHTML = packages.map(pkg => createPackageCard(pkg)).join('');
}

// Update results text
function updateResultsText(count) {
    const resultsText = document.getElementById('results-text');
    if (resultsText) {
        resultsText.textContent = `Showing ${count} package${count !== 1 ? 's' : ''}`;
    }
}

// Reset filters
function resetFilters() {
    document.getElementById('category-filter').value = 'all';
    document.getElementById('destination-filter').value = 'all';
    document.getElementById('duration-filter').value = 'all';
    document.getElementById('sort-filter').value = 'default';
    
    filterPackages();
}

// Populate package select dropdown
function populatePackageSelect() {
    const select = document.getElementById('package');
    if (!select) return;
    
    // Add all packages as options
    tourPackages.forEach(pkg => {
        const option = document.createElement('option');
        option.value = pkg.id;
        option.textContent = `${pkg.title} (${pkg.duration})`;
        select.appendChild(option);
    });
}
