/* World English Bible — feature data, loaded lazily by index.html
   through its script-tag loader (the loadTestament/loadXrefs pattern),
   so the app shell stays light. Content moved verbatim from index.html. */

      /* ---- prayers of the bible ----
         The Bible's great prayers, in the order they stand below,
         each with the one line that says who is praying and the
         moment they are in. Tapping one opens its chapter in the
         reader with the prayer's verses standing highlighted and
         scrolled into view, the way a reading plan's day opens.
         Entries are [name, introduction, reference label, book,
         chapter (0-based), first verse, last verse] — a last verse
         of 0 means the prayer is the whole chapter, and its verses
         are counted from the chapter itself when it is opened.
         Every range was checked against the WEB text: the words
         are the app's own, unchanged. */
      var PRAYERS = [
        ["The Lord's Prayer", "Jesus teaches us to pray", "Matthew 6:9–13", 39, 5, 9, 13],
        ["Jesus in Gethsemane", "Alone in the garden on the night He was betrayed, Jesus asks His Father about the cup — and yields to His will.", "Matthew 26:39–44", 39, 25, 39, 44],
        ["The High Priestly Prayer", "Jesus prays for His own", "John 17", 42, 16, 1, 0],
        ["Mary's Song", "The Magnificat — Mary, carrying Jesus, sings her joy to God at Elizabeth's house.", "Luke 1:46–55", 41, 0, 46, 55],
        ["Hannah's Prayer of Joy", "Hannah, her long prayer for a child answered, gives Samuel back to God with a song of thanks.", "1 Samuel 2:1–10", 8, 1, 1, 10],
        ["David's Prayer of Thanks", "David, before all the assembly, thanks God for the gifts gathered to build His house.", "1 Chronicles 29:10–13", 12, 28, 10, 13],
        ["Solomon Dedicates the Temple", "Solomon stands before the altar at the temple's dedication and prays for God's house and people.", "1 Kings 8:22–30", 10, 7, 22, 30],
        ["Hezekiah Prays in the Invasion", "With Assyria's army at the gate, Hezekiah spreads the enemy's letter before God in the temple and prays.", "2 Kings 19:15–19", 11, 18, 15, 19],
        ["Ezra Confesses for the People", "Ezra, weeping and ashamed of the people's sin, confesses it and pleads God's covenant mercy.", "Ezra 9:6–15", 14, 8, 6, 15],
        ["Nehemiah's Prayer for Jerusalem", "Nehemiah, hearing of Jerusalem's broken walls, weeps and prays — before he acts.", "Nehemiah 1:5–11", 15, 0, 5, 11],
        ["Daniel Prays for His People", "Daniel, in exile, confesses his people's sin and asks God to turn His anger away from Jerusalem.", "Daniel 9:4–19", 26, 8, 4, 19],
        ["Jonah Prays from the Fish", "From inside the great fish, Jonah thanks God for a rescue he cannot yet see the end of.", "Jonah 2:2–9", 31, 1, 2, 9],
        ["Habakkuk Rejoices Anyway", "Habakkuk's prayer-song: though the fields stand empty, he will rejoice in God his Savior.", "Habakkuk 3", 34, 2, 1, 0],
        ["The First Church Prays Boldly", "Threatened and told to be silent, the first believers ask God not for safety, but for boldness.", "Acts 4:24–30", 43, 3, 24, 30],
        ["Paul Prays for the Ephesians — to Know Him", "Paul asks the Father of glory to open their eyes — to know Him, and the hope and power that are theirs.", "Ephesians 1:17–23", 48, 0, 17, 23],
        ["Paul Prays for the Ephesians — Rooted in Love", "Paul bows his knees and prays they would be rooted and grounded in Christ's love.", "Ephesians 3:14–21", 48, 2, 14, 21],
        ["Paul Prays for the Philippians", "Paul thanks God for his dear friends and prays their love will grow in knowledge and depth of insight.", "Philippians 1:9–11", 49, 0, 9, 11],
        ["Paul Prays for the Colossians", "Paul, who has never met them face to face, prays they will walk worthy of the Lord and bear fruit.", "Colossians 1:9–14", 50, 0, 9, 14]
      ];

      window.__WEB_PRAYERS__ = PRAYERS;
