async function initReviews() {
    try {
        const { Place } = await google.maps.importLibrary('places');
        const place = new Place({ id: 'ChIJRcjun023d0gREMrdyxvR8kc' });
        await place.fetchFields({ fields: ['reviews'] });

        const container = document.getElementById('reviews-container');
        const reviews = place.reviews
            ? [...place.reviews].sort(() => Math.random() - 0.5)
            : null;

        if (!reviews || !reviews.length) {
            container.innerHTML = '';
            return;
        }

        container.innerHTML = reviews.map(function (review) {
            var rating = review.rating || 0;
            var stars = '★'.repeat(rating) + '☆'.repeat(5 - rating);
            var text = (review.text || '').replace(/</g, '&lt;').replace(/>/g, '&gt;');
            var author = (review.authorAttribution && review.authorAttribution.displayName) || '';
            var initials = author.split(' ').map(function (w) { return w[0]; }).join('').slice(0, 2).toUpperCase();
            var replyText = review.ownerResponse && review.ownerResponse.text
                ? review.ownerResponse.text.replace(/</g, '&lt;').replace(/>/g, '&gt;')
                : null;
            var replyHtml = replyText
                ? '<p class="review-reply">&ldquo;' + replyText + '&rdquo;</p>'
                : '';
            return '<div class="testimonial col-md-6">' +
                '<div class="testimonial-bubble">' +
                '<div class="testimonial-icon reviewer-initials">' + initials + '</div>' +
                '<p class="testimonial-text">&ldquo;' + text + '&rdquo;</p>' +
                '<p>' + author + '<br><span class="review-stars">' + stars + '</span></p>' +
                replyHtml +
                '</div></div>';
        }).join('');
    } catch (e) {
        console.error('Could not load reviews:', e);
    }
}
