import {
  FETCH_VERSE_START,
  FETCH_VERSE_SUCCESS,
  FETCH_VERSE_FAILURE
} from '../actions/verseActions';

const initState = {
  isFetching: false,
  error: '',
  passage: {
    translation: 'KJV',
    book: 'Philippians',
    chapter: '1',
    verses: '1-30',
    content: [
      {
        verseNumber: "1",
        translation: 'KJV',
        text: "Paul and Timotheus, the servants of Jesus Christ, to all the saints in Christ Jesus which are at Philippi, with the bishops and deacons:"
      },
      {
        verseNumber: "2",
        translation: 'KJV',
        text: "Grace be unto you, and peace, from God our Father, and from the Lord Jesus Christ."
      },
      {
        verseNumber: "3",
        translation: 'KJV',
        text: "I thank my God upon every remembrance of you,"
      },
      {
        verseNumber: "4",
        translation: 'KJV',
        text: "Always in every prayer of mine for you all making request with joy,"
      },
      {
        verseNumber: "5",
        translation: 'KJV',
        text: "For your fellowship in the gospel from the first day until now;"
      },
      {
        verseNumber: "6",
        translation: 'KJV',
        text: "Being confident of this very thing, that he which hath begun a good work in you will perform it until the day of Jesus Christ:"
      },
      {
        verseNumber: "7",
        translation: 'KJV',
        text: "Even as it is meet for me to think this of you all, because I have you in my heart; inasmuch as both in my bonds, and in the defence and confirmation of the gospel, ye all are partakers of my grace."
      },
      {
        verseNumber: "8",
        translation: 'KJV',
        text: "For God is my record, how greatly I long after you all in the bowels of Jesus Christ."
      },
      {
        verseNumber: "9",
        translation: 'KJV',
        text: "And this I pray, that your love may abound yet more and more in knowledge and in all judgment;"
      },
      {
        verseNumber: "10",
        translation: 'KJV',
        text: "That ye may approve things that are excellent; that ye may be sincere and without offence till the day of Christ;"
      },
      {
        verseNumber: "11",
        translation: 'KJV',
        text: "Being filled with the fruits of righteousness, which are by Jesus Christ, unto the glory and praise of God."
      },
      {
        verseNumber: "12",
        translation: 'KJV',
        text: "But I would ye should understand, brethren, that the things which happened unto me have fallen out rather unto the furtherance of the gospel;"
      },
      {
        verseNumber: "13",
        translation: 'KJV',
        text: "So that my bonds in Christ are manifest in all the palace, and in all other places;"
      },
      {
        verseNumber: "14",
        translation: 'KJV',
        text: "And many of the brethren in the Lord, waxing confident by my bonds, are much more bold to speak the word without fear."
      },
      {
        verseNumber: "15",
        translation: 'KJV',
        text: "Some indeed preach Christ even of envy and strife; and some also of good will:"
      },
      {
        verseNumber: "16",
        translation: 'KJV',
        text: "The one preach Christ of contention, not sincerely, supposing to add affliction to my bonds:"
      },
      {
        verseNumber: "17",
        translation: 'KJV',
        text: "But the other of love, knowing that I am set for the defence of the gospel."
      },
      {
        verseNumber: "18",
        translation: 'KJV',
        text: "What then? notwithstanding, every way, whether in pretence, or in truth, Christ is preached; and I therein do rejoice, yea, and will rejoice."
      },
      {
        verseNumber: "19",
        translation: 'KJV',
        text: "For I know that this shall turn to my salvation through your prayer, and the supply of the Spirit of Jesus Christ,"
      },
      {
        verseNumber: "20",
        translation: 'KJV',
        text: "According to my earnest expectation and my hope, that in nothing I shall be ashamed, but that with all boldness, as always, so now also Christ shall be magnified in my body, whether it be by life, or by death."
      },
      {
        verseNumber: "21",
        translation: 'KJV',
        text: "For to me to live is Christ, and to die is gain."
      },
      {
        verseNumber: "22",
        translation: 'KJV',
        text: "But if I live in the flesh, this is the fruit of my labour: yet what I shall choose I wot not."
      },
      {
        verseNumber: "23",
        translation: 'KJV',
        text: "For I am in a strait betwixt two, having a desire to depart, and to be with Christ; which is far better:"
      },
      {
        verseNumber: "24",
        translation: 'KJV',
        text: "Nevertheless to abide in the flesh is more needful for you."
      },
      {
        verseNumber: "25",
        translation: 'KJV',
        text: "And having this confidence, I know that I shall abide and continue with you all for your furtherance and joy of faith;"
      },
      {
        verseNumber: "26",
        translation: 'KJV',
        text: "That your rejoicing may be more abundant in Jesus Christ for me by my coming to you again."
      },
      {
        verseNumber: "27",
        translation: 'KJV',
        text: "Only let your conversation be as it becometh the gospel of Christ: that whether I come and see you, or else be absent, I may hear of your affairs, that ye stand fast in one spirit, with one mind striving together for the faith of the gospel;"
      },
      {
        verseNumber: "28",
        translation: 'KJV',
        text: "And in nothing terrified by your adversaries: which is to them an evident token of perdition, but to you of salvation, and that of God."
      },
      {
        verseNumber: "29",
        translation: 'KJV',
        text: "For unto you it is given in the behalf of Christ, not only to believe on him, but also to suffer for his sake;"
      },
      {
        verseNumber: "30",
        translation: 'KJV',
        text: "Having the same conflict which ye saw in me, and now hear to be in me."
      }
    ]
  }
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_VERSE_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_VERSE_SUCCESS:
      return {
        ...state,
        passage: {
          ...state.passage,
          content: [
            ...state.passage.content.map(el => (
              (el.verseNumber === action.payload.verseNumber) ? (action.payload) : (el)
            ))
          ]
        },
        isFetching: false,
        error: ''
      };
    case FETCH_VERSE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;