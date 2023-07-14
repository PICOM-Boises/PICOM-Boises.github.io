			fetch("Test.geojson")
				.then(function(response) {
					return response.json();
				})
				.then(function(data) {
					L.geoJSON(data).addTo(map);
				});