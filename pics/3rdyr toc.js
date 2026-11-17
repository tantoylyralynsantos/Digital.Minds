
<script>
document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("lessonSearch");
    const bookCards = document.querySelectorAll(".lesson-card");
    const resultMessage = document.getElementById("resultMessage");
    const noResults = document.getElementById("noResults");

    if (!searchInput) return;

    searchInput.addEventListener("input", function () {

        const searchValue = searchInput.value.toLowerCase().trim();
        let visibleCount = 0;

        bookCards.forEach(function (card) {

            const bookText = card.textContent.toLowerCase();
            const isMatch = bookText.includes(searchValue);

            card.style.display = isMatch ? "" : "none";

            if (isMatch) {
                visibleCount++;
            }

        });

        resultMessage.textContent =
            visibleCount + (visibleCount === 1
                ? " book available"
                : " books available");

        noResults.hidden = visibleCount !== 0;

    });

});
</script>
</body>
</html>
```

### 3. Ano ang magiging itsura?

<box gap={2}>
  <AsyncImage query="minimal elegant pastel editorial book cover collection digital bookstore grid books muted sage beige blue covers" aspectRatio="16:9" width="100%" />
  <text color="secondary" size="xs">Design inspiration: minimalist editorial book covers with soft pastel colors.</text>
</box>

- **5 books per row** kapag desktop.
- **4 books per row** kapag tablet.
- **3 books per row** sa smaller screens.
- **2 books per row** kapag mobile.
- Magkakaibang muted pastel colors ang bawat chapter.
- May book spine, cover shadow, title, subtitle, at chapter number.
- May hover effect kapag tinutukan ang book.
- Gumagana ang search kahit walang `toc.js`.

**Important:** I-save ang `toc.css`, pagkatapos i-refresh ang browser gamit ang `Ctrl + F5` para hindi lumang CSS ang ipinapakita ng browser. Huwag nang pagsamahin ang lumang CSS at bagong CSS—ang bagong code na ito na ang buong kapalit.