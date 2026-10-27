/* World English Bible — feature data, loaded lazily by index.html
   through its script-tag loader (the loadTestament/loadXrefs pattern),
   so the app shell stays light. Content moved verbatim from index.html. */

      /* ---- where to turn ----
         Life topics, in alphabetical order, each with
         passages that open right in the reader — a chapter
         reference opens its chapter, a verse reference opens
         the chapter at that verse, exactly the way a search
         result does. References are [label, book, chapter
         (0-based), verse (1-based, 0 for the whole chapter)]. */
      var TURN_MOMENTS = [
        { title: "Addiction or a habit you can't break", refs: [
          ["Romans 7", 44, 6, 0], ["John 8", 42, 7, 0], ["Galatians 5", 47, 4, 0] ] },
        { title: "Afraid", refs: [
          ["Psalm 23", 18, 22, 0], ["Psalm 56", 18, 55, 0], ["Isaiah 41:10", 22, 40, 10] ] },
        { title: "Angry", refs: [
          ["Psalm 37", 18, 36, 0], ["Ephesians 4", 48, 3, 0], ["James 1", 58, 0, 0] ] },
        { title: "Anxious or worried", refs: [
          ["Matthew 6", 39, 5, 0], ["Philippians 4", 49, 3, 0], ["1 Peter 5", 59, 4, 0] ] },
        { title: "Ashamed", refs: [
          ["Psalm 25", 18, 24, 0], ["Isaiah 54", 22, 53, 0], ["Romans 8", 44, 7, 0] ] },
        { title: "Assurance of salvation", refs: [
          ["John 10", 42, 9, 0], ["Romans 8", 44, 7, 0], ["1 John 5", 61, 4, 0] ] },
        { title: "Backsliding, returning to God", refs: [
          ["Hosea 14", 27, 13, 0], ["Jeremiah 3", 23, 2, 0], ["Luke 15", 41, 14, 0] ] },
        { title: "Betrayed", refs: [
          ["Psalm 41", 18, 40, 0], ["Psalm 55", 18, 54, 0], ["Luke 22", 41, 21, 0] ] },
        { title: "Bitterness", refs: [
          ["Psalm 73", 18, 72, 0], ["Ephesians 4", 48, 3, 0], ["Hebrews 12", 57, 11, 0] ] },
        { title: "Blessing and intercession", refs: [
          ["Numbers 6", 3, 5, 0], ["1 Timothy 2", 53, 1, 0], ["Ephesians 1", 48, 0, 0] ] },
        { title: "Boredom and meaninglessness", refs: [
          ["Ecclesiastes 2", 20, 1, 0], ["Ecclesiastes 3", 20, 2, 0], ["Psalm 90", 18, 89, 0] ] },
        { title: "Can't sleep", refs: [
          ["Psalm 4", 18, 3, 0], ["Psalm 121", 18, 120, 0], ["Psalm 127", 18, 126, 0] ] },
        { title: "Comfort", refs: [
          ["Isaiah 49", 22, 48, 0], ["Isaiah 51", 22, 50, 0], ["Psalm 23", 18, 22, 0] ] },
        { title: "Confusion", refs: [
          ["Psalm 32", 18, 31, 0], ["Isaiah 30", 22, 29, 0], ["1 Corinthians 14", 45, 13, 0] ] },
        { title: "Contentment", refs: [
          ["Philippians 4", 49, 3, 0], ["Hebrews 13", 57, 12, 0], ["1 Timothy 6", 53, 5, 0] ] },
        { title: "Courage", refs: [
          ["Deuteronomy 31", 4, 30, 0], ["Joshua 1", 5, 0, 0], ["Daniel 3", 26, 2, 0] ] },
        { title: "Death and dying", refs: [
          ["Psalm 23", 18, 22, 0], ["2 Corinthians 5", 46, 4, 0], ["Philippians 1", 49, 0, 0] ] },
        { title: "Depressed or despairing", refs: [
          ["Psalm 34", 18, 33, 0], ["Lamentations 3", 24, 2, 0], ["2 Corinthians 1", 46, 0, 0] ] },
        { title: "Diligence and hard work", refs: [
          ["Proverbs 12", 19, 11, 0], ["Ecclesiastes 9", 20, 8, 0], ["Colossians 3", 50, 2, 0] ] },
        { title: "Disappointed", refs: [
          ["Psalm 62", 18, 61, 0], ["Romans 5", 44, 4, 0], ["Hebrews 6", 57, 5, 0] ] },
        { title: "Discouraged", refs: [
          ["Joshua 1", 5, 0, 0], ["Isaiah 40", 22, 39, 0], ["Galatians 6", 47, 5, 0] ] },
        { title: "Doubting", refs: [
          ["Mark 9", 40, 8, 0], ["John 20", 42, 19, 0], ["Jude 1", 64, 0, 0] ] },
        { title: "Enemies and opposition", refs: [
          ["Psalm 27", 18, 26, 0], ["Psalm 35", 18, 34, 0], ["Romans 8", 44, 7, 0] ] },
        { title: "Facing a big decision", refs: [
          ["Proverbs 3", 19, 2, 0], ["Psalm 32:8", 18, 31, 8], ["James 1", 58, 0, 0] ] },
        { title: "Failure", refs: [
          ["Micah 7", 32, 6, 0], ["Lamentations 3", 24, 2, 0], ["Psalm 51", 18, 50, 0] ] },
        { title: "Faith growing", refs: [
          ["Romans 10", 44, 9, 0], ["Hebrews 11", 57, 10, 0], ["Mark 9", 40, 8, 0] ] },
        { title: "Falsely accused", refs: [
          ["Psalm 26", 18, 25, 0], ["Psalm 43", 18, 42, 0], ["Isaiah 54", 22, 53, 0] ] },
        { title: "Family conflict", refs: [
          ["Genesis 50", 0, 49, 0], ["Matthew 18", 39, 17, 0], ["Colossians 3", 50, 2, 0] ] },
        { title: "Far from God", refs: [
          ["Psalm 73", 18, 72, 0], ["James 4", 58, 3, 0], ["Luke 15", 41, 14, 0] ] },
        { title: "Forgiveness, needing", refs: [
          ["Psalm 32", 18, 31, 0], ["Luke 15", 41, 14, 0], ["1 John 1", 61, 0, 0] ] },
        { title: "Forgiving others", refs: [
          ["Matthew 18", 39, 17, 0], ["Mark 11", 40, 10, 0], ["Luke 17", 41, 16, 0] ] },
        { title: "Friendship", refs: [
          ["Proverbs 17", 19, 16, 0], ["Proverbs 27", 19, 26, 0], ["John 15", 42, 14, 0] ] },
        { title: "Generosity and giving", refs: [
          ["Proverbs 11", 19, 10, 0], ["Luke 6", 41, 5, 0], ["2 Corinthians 9", 46, 8, 0] ] },
        { title: "God's faithfulness", refs: [
          ["Deuteronomy 7", 4, 6, 0], ["Psalm 89", 18, 88, 0], ["Lamentations 3", 24, 2, 0] ] },
        { title: "God's love", refs: [
          ["John 3", 42, 2, 0], ["Romans 8", 44, 7, 0], ["1 John 4", 61, 3, 0] ] },
        { title: "God's power", refs: [
          ["Genesis 1", 0, 0, 0], ["Psalm 147", 18, 146, 0], ["Jeremiah 32", 23, 31, 0] ] },
        { title: "God's Word", refs: [
          ["Psalm 119", 18, 118, 0], ["Joshua 1", 5, 0, 0], ["2 Timothy 3", 54, 2, 0] ] },
        { title: "Greed and love of money", refs: [
          ["Ecclesiastes 5", 20, 4, 0], ["Luke 12", 41, 11, 0], ["1 Timothy 6", 53, 5, 0] ] },
        { title: "Grieving", refs: [
          ["Psalm 42", 18, 41, 0], ["John 11", 42, 10, 0], ["Revelation 21", 65, 20, 0] ] },
        { title: "Guidance", refs: [
          ["Psalm 25", 18, 24, 0], ["Psalm 32", 18, 31, 0], ["Isaiah 30", 22, 29, 0] ] },
        { title: "Guilty", refs: [
          ["Psalm 32", 18, 31, 0], ["Psalm 51", 18, 50, 0], ["1 John 1", 61, 0, 0] ] },
        { title: "Happy and joyful", refs: [
          ["Psalm 16", 18, 15, 0], ["Psalm 118", 18, 117, 0], ["Philippians 4", 49, 3, 0] ] },
        { title: "Heaven", refs: [
          ["John 14", 42, 13, 0], ["Revelation 21", 65, 20, 0], ["Revelation 22", 65, 21, 0] ] },
        { title: "Honesty and integrity", refs: [
          ["Psalm 15", 18, 14, 0], ["Proverbs 12", 19, 11, 0], ["Micah 6", 32, 5, 0] ] },
        { title: "Hope", refs: [
          ["Psalm 33", 18, 32, 0], ["Jeremiah 29", 23, 28, 0], ["Romans 15", 44, 14, 0] ] },
        { title: "Hopeless", refs: [
          ["Psalm 130", 18, 129, 0], ["Lamentations 3", 24, 2, 0], ["Romans 15", 44, 14, 0] ] },
        { title: "Humility", refs: [
          ["Micah 6", 32, 5, 0], ["Proverbs 11", 19, 10, 0], ["Philippians 2", 49, 1, 0] ] },
        { title: "Impatient", refs: [
          ["Psalm 27", 18, 26, 0], ["Psalm 37", 18, 36, 0], ["Isaiah 40", 22, 39, 0] ] },
        { title: "In trouble or danger", refs: [
          ["Psalm 18", 18, 17, 0], ["Psalm 46", 18, 45, 0], ["Psalm 91", 18, 90, 0] ] },
        { title: "Insecure", refs: [
          ["Isaiah 43", 22, 42, 0], ["Luke 12", 41, 11, 0], ["Psalm 139", 18, 138, 0] ] },
        { title: "Jealous or envious", refs: [
          ["Psalm 37", 18, 36, 0], ["Psalm 73", 18, 72, 0], ["Galatians 5", 47, 4, 0] ] },
        { title: "Joy in trials", refs: [
          ["Habakkuk 3", 34, 2, 0], ["James 1", 58, 0, 0], ["1 Peter 1", 59, 0, 0] ] },
        { title: "Justice", refs: [
          ["Isaiah 1", 22, 0, 0], ["Amos 5", 29, 4, 0], ["Micah 6", 32, 5, 0] ] },
        { title: "Kindness", refs: [
          ["Micah 6", 32, 5, 0], ["Ephesians 4", 48, 3, 0], ["Colossians 3", 50, 2, 0] ] },
        { title: "Laziness", refs: [
          ["Proverbs 6", 19, 5, 0], ["Proverbs 24", 19, 23, 0], ["2 Thessalonians 3", 52, 2, 0] ] },
        { title: "Lonely", refs: [
          ["Psalm 139", 18, 138, 0], ["Deuteronomy 31:8", 4, 30, 8], ["Matthew 28:20", 39, 27, 20] ] },
        { title: "Marriage", refs: [
          ["Genesis 2", 0, 1, 0], ["Song of Solomon 8", 21, 7, 0], ["Ephesians 5", 48, 4, 0] ] },
        { title: "Mercy", refs: [
          ["Psalm 103", 18, 102, 0], ["Lamentations 3", 24, 2, 0], ["Matthew 5", 39, 4, 0] ] },
        { title: "Money troubles", refs: [
          ["Psalm 34", 18, 33, 0], ["Matthew 6", 39, 5, 0], ["Hebrews 13:5", 57, 12, 5] ] },
        { title: "Needing peace", refs: [
          ["John 14", 42, 13, 0], ["John 16", 42, 15, 0], ["Colossians 3", 50, 2, 0] ] },
        { title: "New believer", refs: [
          ["John 1", 42, 0, 0], ["Acts 2", 43, 1, 0], ["Romans 6", 44, 5, 0] ] },
        { title: "Old age", refs: [
          ["Psalm 71", 18, 70, 0], ["Psalm 92", 18, 91, 0], ["Isaiah 46", 22, 45, 0] ] },
        { title: "Overwhelmed", refs: [
          ["Psalm 46", 18, 45, 0], ["Psalm 61", 18, 60, 0], ["John 16", 42, 15, 0] ] },
        { title: "Parenting and children", refs: [
          ["Deuteronomy 6", 4, 5, 0], ["Psalm 127", 18, 126, 0], ["Proverbs 22", 19, 21, 0] ] },
        { title: "Persecuted for faith", refs: [
          ["Matthew 5", 39, 4, 0], ["1 Peter 3", 59, 2, 0], ["1 Peter 4", 59, 3, 0] ] },
        { title: "Prayer", refs: [
          ["Luke 11", 41, 10, 0], ["Matthew 6", 39, 5, 0], ["John 15", 42, 14, 0] ] },
        { title: "Pride", refs: [
          ["Proverbs 16", 19, 15, 0], ["Luke 18", 41, 17, 0], ["James 4", 58, 3, 0] ] },
        { title: "Protection", refs: [
          ["Psalm 91", 18, 90, 0], ["Psalm 121", 18, 120, 0], ["Psalm 125", 18, 124, 0] ] },
        { title: "Regret", refs: [
          ["Psalm 51", 18, 50, 0], ["Joel 2", 28, 1, 0], ["Philippians 3", 49, 2, 0] ] },
        { title: "Repentance", refs: [
          ["Psalm 51", 18, 50, 0], ["Joel 2", 28, 1, 0], ["Luke 15", 41, 14, 0] ] },
        { title: "Restless", refs: [
          ["Psalm 62", 18, 61, 0], ["Isaiah 26", 22, 25, 0], ["Matthew 11", 39, 10, 0] ] },
        { title: "Resurrection hope", refs: [
          ["Job 19", 17, 18, 0], ["John 11", 42, 10, 0], ["1 Corinthians 15", 45, 14, 0] ] },
        { title: "Sad and downcast", refs: [
          ["Psalm 42", 18, 41, 0], ["Psalm 43", 18, 42, 0], ["John 14", 42, 13, 0] ] },
        { title: "Salvation, how to be saved", refs: [
          ["John 3", 42, 2, 0], ["Acts 16", 43, 15, 0], ["Romans 10", 44, 9, 0] ] },
        { title: "Second coming of Jesus", refs: [
          ["Matthew 24", 39, 23, 0], ["2 Peter 3", 60, 2, 0], ["Revelation 22", 65, 21, 0] ] },
        { title: "Seeking God", refs: [
          ["Deuteronomy 4", 4, 3, 0], ["Jeremiah 29", 23, 28, 0], ["Acts 17", 43, 16, 0] ] },
        { title: "Self-control", refs: [
          ["Proverbs 25", 19, 24, 0], ["Galatians 5", 47, 4, 0], ["Titus 2", 55, 1, 0] ] },
        { title: "Sharing your faith", refs: [
          ["Matthew 28", 39, 27, 0], ["Acts 1", 43, 0, 0], ["1 Peter 3", 59, 2, 0] ] },
        { title: "Sick or in pain", refs: [
          ["Psalm 41", 18, 40, 0], ["Isaiah 53", 22, 52, 0], ["James 5", 58, 4, 0] ] },
        { title: "Someone has hurt you", refs: [
          ["Matthew 6", 39, 5, 0], ["Romans 12", 44, 11, 0], ["Colossians 3", 50, 2, 0] ] },
        { title: "Speech, gossip, and words", refs: [
          ["Proverbs 18", 19, 17, 0], ["James 3", 58, 2, 0], ["Ephesians 4", 48, 3, 0] ] },
        { title: "Spiritual warfare", refs: [
          ["Ephesians 6", 48, 5, 0], ["2 Corinthians 10", 46, 9, 0], ["1 Peter 5", 59, 4, 0] ] },
        { title: "Starting something new", refs: [
          ["Genesis 12", 0, 11, 0], ["Joshua 1", 5, 0, 0], ["Isaiah 43", 22, 42, 0] ] },
        { title: "Strength, needing", refs: [
          ["Isaiah 40", 22, 39, 0], ["2 Corinthians 12", 46, 11, 0], ["Philippians 4:13", 49, 3, 13] ] },
        { title: "Success and blessing", refs: [
          ["Deuteronomy 8", 4, 7, 0], ["Psalm 1", 18, 0, 0], ["Proverbs 3", 19, 2, 0] ] },
        { title: "Suffering, why bad things happen", refs: [
          ["Job 42", 17, 41, 0], ["Romans 8", 44, 7, 0], ["2 Corinthians 1", 46, 0, 0] ] },
        { title: "Tempted", refs: [
          ["Psalm 51", 18, 50, 0], ["1 Corinthians 10:13", 45, 9, 13], ["Hebrews 4", 57, 3, 0] ] },
        { title: "Thankful", refs: [
          ["Psalm 100", 18, 99, 0], ["Psalm 103", 18, 102, 0], ["1 Thessalonians 5", 51, 4, 0] ] },
        { title: "The church and fellowship", refs: [
          ["Acts 2", 43, 1, 0], ["Psalm 122", 18, 121, 0], ["Hebrews 10", 57, 9, 0] ] },
        { title: "The Holy Spirit", refs: [
          ["John 14", 42, 13, 0], ["Acts 2", 43, 1, 0], ["Galatians 5", 47, 4, 0] ] },
        { title: "Traveling or moving", refs: [
          ["Genesis 28", 0, 27, 0], ["Psalm 91", 18, 90, 0], ["Psalm 121", 18, 120, 0] ] },
        { title: "Trusting God", refs: [
          ["Proverbs 3", 19, 2, 0], ["Psalm 56", 18, 55, 0], ["Nahum 1", 33, 0, 0] ] },
        { title: "Waiting on God", refs: [
          ["Psalm 27", 18, 26, 0], ["Psalm 130", 18, 129, 0], ["Habakkuk 2", 34, 1, 0] ] },
        { title: "Weary and tired", refs: [
          ["Isaiah 40", 22, 39, 0], ["Matthew 11:28", 39, 10, 28], ["Galatians 6", 47, 5, 0] ] },
        { title: "Who God is", refs: [
          ["Exodus 34", 1, 33, 0], ["Isaiah 6", 22, 5, 0], ["Psalm 145", 18, 144, 0] ] },
        { title: "Who Jesus is", refs: [
          ["John 1", 42, 0, 0], ["Colossians 1", 50, 0, 0], ["Hebrews 1", 57, 0, 0] ] },
        { title: "Wisdom", refs: [
          ["Proverbs 1", 19, 0, 0], ["Proverbs 2", 19, 1, 0], ["James 1", 58, 0, 0] ] },
        { title: "Work troubles", refs: [
          ["Psalm 90", 18, 89, 0], ["Proverbs 16", 19, 15, 0], ["Colossians 3", 50, 2, 0] ] },
        { title: "Worship and praise", refs: [
          ["Psalm 95", 18, 94, 0], ["Psalm 150", 18, 149, 0], ["John 4", 42, 3, 0] ] },
        { title: "Young and starting out", refs: [
          ["Psalm 119", 18, 118, 0], ["Ecclesiastes 12", 20, 11, 0], ["1 Timothy 4", 53, 3, 0] ] }
      ];

      window.__WEB_TURN__ = TURN_MOMENTS;
