/* World English Bible — feature data, loaded lazily by index.html
   through its script-tag loader (the loadTestament/loadXrefs pattern),
   so the app shell stays light. Content moved verbatim from index.html. */

      var PLANS = [
        {
          id: "gospels",
          title: "Meet Jesus: The Gospels in 30 Days",
          desc: "Matthew, Mark, Luke, and John — the life of Jesus, in order.",
          days: groupCapped(flatChapters([39, 40, 41, 42]), 3)
        },
        /* The same passage-plan shape as Advent: thirty stops
           through the life of Jesus, each one run of verses in a
           single chapter under a title of its own. Book indexes:
           Matthew 39, Mark 40, Luke 41, John 42, Acts 43. */
        {
          id: "life-of-jesus",
          title: "The Life of Jesus — 30 Stops",
          desc: "Thirty passages that walk with Jesus from before His birth to His ascension — one stop at a time.",
          days: [
            [{ b: 42, c: 0, v0: 1, v1: 5 }],
            [{ b: 41, c: 1, v0: 1, v1: 7 }],
            [{ b: 41, c: 1, v0: 8, v1: 20 }],
            [{ b: 41, c: 1, v0: 21, v1: 38 }],
            [{ b: 41, c: 1, v0: 41, v1: 52 }],
            [{ b: 39, c: 2, v0: 13, v1: 17 }],
            [{ b: 39, c: 3, v0: 1, v1: 11 }],
            [{ b: 42, c: 0, v0: 35, v1: 51 }],
            [{ b: 42, c: 1, v0: 1, v1: 11 }],
            [{ b: 42, c: 2, v0: 1, v1: 21 }],
            [{ b: 42, c: 3, v0: 4, v1: 42 }],
            [{ b: 39, c: 4, v0: 1, v1: 16 }],
            [{ b: 40, c: 3, v0: 35, v1: 41 }],
            [{ b: 42, c: 5, v0: 1, v1: 15 }],
            [{ b: 42, c: 5, v0: 32, v1: 40 }],
            [{ b: 42, c: 9, v0: 11, v1: 18 }],
            [{ b: 42, c: 10, v0: 17, v1: 44 }],
            [{ b: 39, c: 16, v0: 1, v1: 9 }],
            [{ b: 41, c: 18, v0: 1, v1: 10 }],
            [{ b: 39, c: 20, v0: 1, v1: 11 }],
            [{ b: 42, c: 12, v0: 1, v1: 17 }],
            [{ b: 39, c: 25, v0: 36, v1: 46 }],
            [{ b: 41, c: 22, v0: 1, v1: 25 }],
            [{ b: 42, c: 18, v0: 16, v1: 30 }],
            [{ b: 39, c: 26, v0: 57, v1: 66 }],
            [{ b: 42, c: 19, v0: 1, v1: 18 }],
            [{ b: 41, c: 23, v0: 13, v1: 35 }],
            [{ b: 42, c: 19, v0: 24, v1: 29 }],
            [{ b: 42, c: 20, v0: 1, v1: 19 }],
            [{ b: 43, c: 0, v0: 1, v1: 11 }]
          ],
          dayTitles: [
            "The Word Before Time", "Born in Bethlehem", "Shepherds and Wise Men",
            "Presented at the Temple", "The Boy in the Temple", "Baptized",
            "Tempted in the Wilderness", "The First Disciples", "Water into Wine",
            "Nicodemus at Night", "The Woman at the Well", "The Sermon on the Mount Begins",
            "Calming the Storm", "Feeding the Five Thousand", "I Am the Bread of Life",
            "The Good Shepherd", "Lazarus, Come Out", "The Transfiguration",
            "Zacchaeus", "The King Enters Jerusalem", "The Last Supper",
            "Gethsemane", "On Trial", "The Cross",
            "Buried", "The Empty Tomb", "The Emmaus Road",
            "Thomas Believes", "Breakfast by the Sea", "Taken Up — and Coming Again"
          ]
        },
        /* A plan of passages rather than whole chapters: each day is
           one run of verses inside a single chapter, and each day
           carries a title of its own (dayTitles walks beside days).
           The v0/v1 fields on a day's chapter entry are what
           planDayLabel, planDayWords, the day's opening mark, and
           the day's listening all read; no other plan carries them,
           and no other plan carries dayTitles. Progress stays the
           one chapters-read record, as with every plan: a day
           counts once its chapter stands read. */
        {
          id: "advent",
          title: "Advent — 25 Days to Christmas",
          desc: "From the first promise in Eden to the child in the manger — one passage a day toward Christmas, and the whole story on Christmas Day.",
          days: [
            [{ b: 0, c: 2, v0: 8, v1: 15 }],
            [{ b: 0, c: 11, v0: 1, v1: 7 }],
            [{ b: 22, c: 6, v0: 10, v1: 17 }],
            [{ b: 22, c: 8, v0: 1, v1: 7 }],
            [{ b: 22, c: 10, v0: 1, v1: 10 }],
            [{ b: 32, c: 4, v0: 2, v1: 5 }],
            [{ b: 22, c: 39, v0: 1, v1: 11 }],
            [{ b: 22, c: 60, v0: 1, v1: 4 }],
            [{ b: 23, c: 22, v0: 1, v1: 6 }],
            [{ b: 26, c: 6, v0: 9, v1: 14 }],
            [{ b: 37, c: 8, v0: 9, v1: 10 }],
            [{ b: 38, c: 2, v0: 1, v1: 4 }],
            [{ b: 41, c: 0, v0: 5, v1: 25 }],
            [{ b: 41, c: 0, v0: 26, v1: 38 }],
            [{ b: 41, c: 0, v0: 39, v1: 56 }],
            [{ b: 41, c: 0, v0: 57, v1: 80 }],
            [{ b: 39, c: 0, v0: 18, v1: 25 }],
            [{ b: 41, c: 1, v0: 1, v1: 7 }],
            [{ b: 41, c: 1, v0: 8, v1: 20 }],
            [{ b: 41, c: 1, v0: 21, v1: 38 }],
            [{ b: 39, c: 1, v0: 1, v1: 12 }],
            [{ b: 39, c: 1, v0: 13, v1: 23 }],
            [{ b: 42, c: 0, v0: 1, v1: 14 }],
            [{ b: 49, c: 1, v0: 5, v1: 11 }],
            [{ b: 41, c: 1, v0: 1, v1: 20 }]
          ],
          dayTitles: [
            "The First Promise", "The Promise to Abraham", "Immanuel Promised",
            "Unto Us a Child Is Born", "The Shoot from Jesse", "Out of Bethlehem",
            "Prepare the Way", "Good News to the Poor", "The Righteous Branch",
            "The Son of Man", "Your King Comes", "The Messenger Before Him",
            "Zechariah and Elizabeth", "The Angel Comes to Mary", "Mary's Song",
            "John Is Born", "Joseph's Dream", "Jesus Is Born",
            "Shepherds Hear the News", "Simeon and Anna", "The Wise Men",
            "The Flight to Egypt", "The Word Became Flesh", "He Humbled Himself",
            "The Whole Story — Christmas Day"
          ]
        },
        {
          id: "psalms",
          title: "Psalms in a Month",
          desc: "Five psalms at a time through Israel's songbook.",
          days: groupCapped(flatChapters([18]), 5)
        },
        {
          id: "nt90",
          title: "The New Testament in 90 Days",
          desc: "From Matthew to Revelation, two or three chapters at a time.",
          days: groupEven(flatChapters(NT_BOOK_LIST), 90)
        },
        {
          id: "ot9",
          title: "The Old Testament in 9 Months",
          desc: "Genesis through Malachi, in order — three or four chapters at a time.",
          days: groupEven(flatChapters(OT_BOOK_LIST), 270)
        },
        {
          id: "year",
          title: "The Bible in a Year",
          desc: "Genesis through Revelation, in order — three or four chapters at a time.",
          days: groupEven(flatChapters(ALL_BOOK_LIST), 365)
        }
      ];

      /* Every plan carries a stable id, and shared plan links name
         the plan by that id (#plan/<id>/<day>), so the plans may
         stand in any order without a link ever landing on the wrong
         plan. Links shared before ids existed name the plan by its
         position in the order the plans then stood in; LEGACY_PLAN_IDS
         keeps that first order, position by position, purely so an
         old numeric link can be translated to the plan it meant. */
      var LEGACY_PLAN_IDS = ["gospels", "psalms", "nt90", "ot9", "year", "advent", "life-of-jesus"];

      window.__WEB_PLANS__ = PLANS;
