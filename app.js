
document.addEventListener('DOMContentLoaded', () => {
    // --- DATA ---
    const vocabulary = window.vocabularyData || [
        { id: 1, category: 'greetings', korean: '안녕하세요', romanization: 'annyeonghaseyo', en: 'Hello', ja: 'こんにちは', zh: '你好', es: 'Hola', example_ko: '안녕하세요, 만나서 반갑습니다.', example_en: 'Hello, nice to meet you.', example_ja: 'こんにちは、初めまして。', example_zh: '你好，很高兴见到你。', example_es: 'Hola, encantado de conocerte.' },
        { id: 2, category: 'basics', korean: '네', romanization: 'ne', en: 'Yes', ja: 'はい', zh: '是的', es: 'Sí', example_ko: '네, 맞아요.', example_en: 'Yes, that\'s right.', example_ja: 'はい、そうです。', example_zh: '是的，没错。', example_es: 'Sí, eso es correcto.' },
        { id: 3, category: 'basics', korean: '아니요', romanization: 'aniyo', en: 'No', ja: 'いいえ', zh: '不是', es: 'No', example_ko: '아니요, 괜찮습니다.', example_en: 'No, thank you.', example_ja: 'いいえ、結構です。', example_zh: '不，谢谢。', example_es: 'No, gracias.' },
        { id: 4, category: 'greetings', korean: '감사합니다', romanization: 'gamsahamnida', en: 'Thank you', ja: 'ありがとうございます', zh: '谢谢', es: 'Gracias', example_ko: '도와주셔서 감사합니다.', example_en: 'Thank you for your help.', example_ja: '助けてくれてありがとうございます。', example_zh: '谢谢你的帮助。', example_es: 'Gracias por tu ayuda.' },
        { id: 5, category: 'food', korean: '물', romanization: 'mul', en: 'Water', ja: '水', zh: '水', es: 'Agua', example_ko: '물 한 잔 주세요.', example_en: 'Please give me a glass of water.', example_ja: 'お水を一杯ください。', example_zh: '请给我一杯水。', example_es: 'Por favor, dame un vaso de agua.' },
        { id: 6, category: 'food', korean: '밥', romanization: 'bap', en: 'Rice / Meal', ja: 'ご飯', zh: '米饭 / 饭', es: 'Arroz / Comida', example_ko: '밥 먹었어요?', example_en: 'Have you eaten?', example_ja: 'ご飯食べましたか？', example_zh: '你吃饭了吗？', example_es: '¿Has comido?' },
        { id: 7, category: 'people', korean: '친구', romanization: 'chingu', en: 'Friend', ja: '友達', zh: '朋友', es: 'Amigo/a', example_ko: '저는 친구를 만날 거예요.', example_en: 'I am going to meet a friend.', example_ja: '私は友達に会います。', example_zh: '我要去见一个朋友。', example_es: 'Voy a encontrarme con un amigo.' },
        { id: 8, category: 'places', korean: '학교', romanization: 'hakgyo', en: 'School', ja: '学校', zh: '学校', es: 'Escuela', example_ko: '학생들은 학교에 갑니다.', example_en: 'Students go to school.', example_ja: '学生たちは学校に行きます。', example_zh: '学生们去学校。', example_es: 'Los estudiantes van a la escuela.' },
        { id: 9, category: 'places', korean: '집', romanization: 'jip', en: 'Home', ja: '家', zh: '家', es: 'Casa', example_ko: '저는 집에 가고 싶어요.', example_en: 'I want to go home.', example_ja: '私は家に帰りたいです。', example_zh: '我想回家。', example_es: 'Quiero ir a casa.' },
        { id: 10, category: 'verbs', korean: '하다', romanization: 'hada', en: 'to do', ja: 'する', zh: '做', es: 'hacer', example_ko: '숙제를 해야 해요.', example_en: 'I have to do my homework.', example_ja: '宿題をしなければなりません。', example_zh: '我得做作业。', example_es: 'Tengo que hacer mi tarea.' },
        { id: 11, category: 'verbs', korean: '가다', romanization: 'gada', en: 'to go', ja: '行く', zh: '去', es: 'ir', example_ko: '어디에 가세요?', example_en: 'Where are you going?', example_ja: 'どこに行きますか？', example_zh: '你去哪儿？', example_es: '¿A dónde vas?' },
        { id: 12, category: 'verbs', korean: '오다', romanization: 'oda', en: 'to come', ja: '来る', zh: '来', es: 'venir', example_ko: '언제 한국에 왔어요?', example_en: 'When did you come to Korea?', example_ja: 'いつ韓国に来ましたか？', example_zh: '你什么时候来韩国的？', example_es: '¿Cuándo viniste a Corea?' },
        { id: 13, category: 'adjectives', korean: '재미있다', romanization: 'jaemi-itda', en: 'to be fun/interesting', ja: '面白い', zh: '有趣', es: 'ser divertido/interesante', example_ko: '이 영화는 재미있어요.', example_en: 'This movie is interesting.', example_ja: 'この映画は面白いです。', example_zh: '这部电影很有趣。', example_es: 'Esta película es interesante.' },
        { id: 14, category: 'adjectives', korean: '맛있다', romanization: 'masitda', en: 'to be delicious', ja: '美味しい', zh: '好吃', es: 'ser delicioso', example_ko: '김치가 맛있어요.', example_en: 'Kimchi is delicious.', example_ja: 'キムチは美味しいです。', example_zh: '泡菜很好吃。', example_es: 'El kimchi es delicioso.' },
        { id: 15, category: 'shopping', korean: '얼마예요?', romanization: 'eolmayeyo?', en: 'How much is it?', ja: 'いくらですか？', zh: '多少钱？', es: '¿Cuánto cuesta?', example_ko: '이거 얼마예요?', example_en: 'How much is this?', example_ja: 'これはいくらですか？', example_zh: '这个多少钱？', example_es: '¿Cuánto cuesta esto?' },
        { id: 16, category: 'numbers', korean: '하나', romanization: 'hana', en: 'One', ja: '一つ', zh: '一', es: 'Uno', example_ko: '사과 하나 주세요.', example_en: 'Please give me one apple.', example_ja: 'リンゴを一つください。', example_zh: '请给我一个苹果。', example_es: 'Por favor, dame una manzana.' },
        { id: 17, category: 'time', korean: '오늘', romanization: 'oneul', en: 'Today', ja: '今日', zh: '今天', es: 'Hoy', example_ko: '오늘 날씨가 좋아요.', example_en: 'The weather is nice today.', example_ja: '今日は天気が良いです。', example_zh: '今天天气很好。', example_es: 'Hoy hace buen tiempo.' },
        { id: 18, category: 'people', korean: '사랑', romanization: 'sarang', en: 'Love', ja: '愛', zh: '爱', es: 'Amor', example_ko: '나는 너를 사랑해.', example_en: 'I love you.', example_ja: '私はあなたを愛しています。', example_zh: '我爱你。', example_es: 'Te amo.' },
        { id: 19, category: 'adjectives', korean: '예쁘다', romanization: 'yeppeuda', en: 'to be pretty', ja: 'きれい', zh: '漂亮', es: 'ser bonita', example_ko: '꽃이 정말 예뻐요.', example_en: 'The flowers are so pretty.', example_ja: '花が本当にきれいです。', example_zh: '花儿真漂亮。', example_es: 'Las flores son muy bonitas.' },
        { id: 20, category: 'basics', korean: '죄송합니다', romanization: 'joesonghamnida', en: 'Sorry', ja: 'すみません', zh: '对不起', es: 'Lo siento', example_ko: '늦어서 죄송합니다.', example_en: 'Sorry for being late.', example_ja: '遅れてすみません。', example_zh: '对不起，我迟到了。', example_es: 'Siento llegar tarde.' }
    ];

    const i18n = {
        en: {
            appTitle: 'Korean Vocabulary App',
            tabFlashcards: 'Flashcards',
            tabQuiz: 'Quiz',
            tabVocabulary: 'Vocabulary',
            prevButton: 'Prev',
            nextButton: 'Next',
            startQuizButton: 'Start Quiz',
            reviewWrongAnswers: 'Review Wrong Answers',
            searchPlaceholder: 'Search...',
            allCategories: 'All Categories',
            showFavorites: 'Show Favorites',
            quizScore: (score, total) => `Quiz Complete! Your score: ${score}/${total}`,
            howToUseTitle: 'How to Use',
            howToUseStep1: 'Flashcards: Click the card to flip. Use Prev/Next to navigate.',
            howToUseStep2: 'Quiz: Test your knowledge. Review missed words at the end.',
            howToUseStep3: 'Vocabulary: Search and filter words by category or favorites.',
            tabPartnership: 'Partnership',
            partnershipTitle: 'Partnership Inquiry',
            formName: 'Name',
            formEmail: 'Email',
            formMessage: 'Message',
            formSubmit: 'Send Message',
            namePlaceholder: 'Your Name',
            emailPlaceholder: 'your@email.com',
            messagePlaceholder: 'Tell us how we can collaborate...',
            introTitle: 'Master Essential Korean Words',
            introText: 'Welcome to the ultimate free resource for learning Korean vocabulary. Our app is designed to help you memorize essential words through interactive flashcards and quizzes. Whether you are a complete beginner or looking to refresh your memory, our scientifically designed repetition system ensures you retain what you learn.',
            footerSejong: 'Who is King Sejong?',
            tabSejong: '👑 King Sejong',
        },
        ko: {
            appTitle: '한국어 단어 학습 앱',
            tabFlashcards: '플래시카드',
            tabQuiz: '퀴즈',
            tabVocabulary: '어휘 목록',
            prevButton: '이전',
            nextButton: '다음',
            startQuizButton: '퀴즈 시작',
            reviewWrongAnswers: '오답 다시 풀기',
            searchPlaceholder: '검색...',
            allCategories: '모든 카테고리',
            showFavorites: '즐겨찾기 보기',
            quizScore: (score, total) => `퀴즈 완료! 점수: ${score}/${total}`,
            howToUseTitle: '사용 방법',
            howToUseStep1: '플래시카드: 카드를 클릭하면 뜻이 보입니다. 이전/다음 버튼으로 이동하세요.',
            howToUseStep2: '퀴즈: 학습한 내용을 테스트하고 틀린 단어를 복습하세요.',
            howToUseStep3: '어휘 목록: 검색과 필터를 통해 원하는 단어를 찾고 즐겨찾기 하세요.',
            tabPartnership: '제휴 문의',
            partnershipTitle: '제휴 및 협력 문의',
            formName: '이름',
            formEmail: '이메일',
            formMessage: '문의 내용',
            formSubmit: '문의하기',
            namePlaceholder: '성함을 입력해 주세요',
            emailPlaceholder: '이메일 주소를 입력해 주세요',
            messagePlaceholder: '제휴 또는 제안 내용을 자유롭게 작성해 주세요...',
            introTitle: '필수 한국어 단어 마스터하기',
            introText: '한국어 어휘 학습을 위한 최고의 무료 리소스에 오신 것을 환영합니다. 대화형 플래시카드와 퀴즈를 통해 필수 단어를 암기할 수 있도록 설계되었습니다. 초보자이든 복습을 원하는 학습자이든, 과학적으로 설계된 반복 시스템이 학습 내용을 확실히 기억하도록 돕습니다.',
            footerSejong: '세종대왕은 누구인가요?',
            tabSejong: '👑 세종대왕',
        },
        ja: {
            appTitle: '韓国語単語学習アプリ',
            tabFlashcards: 'フラッシュカード',
            tabQuiz: 'クイズ',
            tabVocabulary: '語彙リスト',
            prevButton: '前へ',
            nextButton: '次へ',
            startQuizButton: 'クイズを開始',
            reviewWrongAnswers: '間違えた問題を復習',
            searchPlaceholder: '検索...',
            allCategories: 'すべてのカテゴリ',
            showFavorites: 'お気に入りを表示',
            quizScore: (score, total) => `クイズ完了！スコア: ${score}/${total}`,
            howToUseTitle: '使い方',
            howToUseStep1: 'フラッシュカード: カードをクリックすると意味が表示されます。前/次ボタンで移動します。',
            howToUseStep2: 'クイズ: 学習内容をテストし、最後に間違えた単語を復習できます。',
            howToUseStep3: '語彙リスト: 検索やフィルターを使って単語を探し、お気に入りに追加できます。',
            tabPartnership: '提携',
            partnershipTitle: '提携・協力に関するお問い合わせ',
            formName: 'お名前',
            formEmail: 'メールアドレス',
            formMessage: 'お問い合わせ内容',
            formSubmit: '送信する',
            namePlaceholder: 'お名前を入力してください',
            emailPlaceholder: 'メールアドレスを入力してください',
            messagePlaceholder: '提携または提案内容を自由に入力してください...',
            introTitle: '必須の韓国語単語をマスターする',
            introText: '韓国語の語彙を学ぶための究極の無料リソースへようこそ。インタラクティブなフラッシュカードとクイズを通じて、必須単語を記憶できるように設計されています。初心者の方も、復習したい方も、科学的に設計された反復システムにより、学習した内容を確実に定着させます。',
            footerSejong: '世宗大王とは？',
            tabSejong: '👑 世宗大王',
        },
        zh: {
            appTitle: '韩语词汇学习应用',
            tabFlashcards: '抽认卡',
            tabQuiz: '测验',
            tabVocabulary: '词汇表',
            prevButton: '上一个',
            nextButton: '下一个',
            startQuizButton: '开始测验',
            reviewWrongAnswers: '复习错题',
            searchPlaceholder: '搜索...',
            allCategories: '所有类别',
            showFavorites: '显示收藏',
            quizScore: (score, total) => `测验完成！你的分数: ${score}/${total}`,
            howToUseTitle: '使用方法',
            howToUseStep1: '抽认卡：点击卡片查看含义。使用上一个/下一个按钮进行切换。',
            howToUseStep2: '测验：测试你的知识。结束后可以复习错题。',
            howToUseStep3: '词汇表：通过搜索和过滤查找单词并收藏。',
            tabPartnership: '合作',
            partnershipTitle: '合作与业务咨询',
            formName: '姓名',
            formEmail: '电子邮件',
            formMessage: '咨询内容',
            formSubmit: '发送信息',
            namePlaceholder: '请输入您的姓名',
            emailPlaceholder: '请输入您的电子邮件地址',
            messagePlaceholder: '请自由填写合作或建议内容...',
            introTitle: '掌握基本韩语单词',
            introText: '欢迎使用终极免费韩语词汇学习资源。我们的应用程序旨在通过互动抽认卡和测验帮助您记忆基本单词。无论您是完全的初学者还是想复习记忆，我们科学设计的重复系统都能确保您记住学到的内容。',
            footerSejong: '谁是世宗大王？',
            tabSejong: '👑 世宗大王',
        },
        es: {
            appTitle: 'App de Vocabulario Coreano',
            tabFlashcards: 'Tarjetas',
            tabQuiz: 'Prueba',
            tabVocabulary: 'Vocabulario',
            prevButton: 'Anterior',
            nextButton: 'Siguiente',
            startQuizButton: 'Empezar Prueba',
            reviewWrongAnswers: 'Repasar Respuestas Incorrectas',
            searchPlaceholder: 'Buscar...',
            allCategories: 'Todas las categorías',
            showFavorites: 'Mostrar Favoritos',
            quizScore: (score, total) => `¡Prueba completada! Tu puntuación: ${score}/${total}`,
            howToUseTitle: 'Cómo usar',
            howToUseStep1: 'Tarjetas: Haz clic en la tarjeta para ver el significado. Usa Anterior/Siguiente.',
            howToUseStep2: 'Prueba: Pon a prueba tus conocimientos. Repasa los errores al final.',
            howToUseStep3: 'Vocabulario: Busca y filtra palabras por categoría o favoritos.',
            tabPartnership: 'Asociación',
            partnershipTitle: 'Consulta de Asociación',
            formName: 'Nombre',
            formEmail: 'Correo electrónico',
            formMessage: 'Mensaje',
            formSubmit: 'Enviar mensaje',
            namePlaceholder: 'Tu nombre',
            emailPlaceholder: 'tu@correo.com',
            messagePlaceholder: 'Cuéntanos cómo podemos colaborar...',
            introTitle: 'Domina las palabras esenciales en coreano',
            introText: 'Bienvenido al mejor recurso gratuito para aprender vocabulario coreano. Nuestra aplicación está diseñada para ayudarte a memorizar palabras esenciales mediante tarjetas interactivas y cuestionarios. Ya seas un principiante absoluto o busques refrescar tu memoria, nuestro sistema de repetición diseñado científicamente asegura que retengas lo que aprendes.',
            footerSejong: '¿Quién es el Rey Sejong?',
            tabSejong: '👑 Rey Sejong',
        }
    };

    // --- STATE MANAGEMENT ---
    let state = {
        currentWordIndex: 0,
        language: 'en',
        theme: 'light',
        activeTab: 'flashcards',
        favorites: [],
        wrongAnswers: [],
    };

    const saveState = () => {
        localStorage.setItem('koreanApp.state', JSON.stringify(state));
    };

    const loadState = () => {
        const savedState = localStorage.getItem('koreanApp.state');
        if (savedState) {
            state = { ...state, ...JSON.parse(savedState) };
        }
        applyTheme();
    };

    const applyTheme = () => {
        document.body.classList.toggle('dark-mode', state.theme === 'dark');
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.textContent = state.theme === 'dark' ? '☀️' : '🌓';
        }
    };

    const toggleTheme = () => {
        state.theme = state.theme === 'dark' ? 'light' : 'dark';
        applyTheme();
        saveState();
    };

    // --- DOM ELEMENTS ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const languageSelector = document.getElementById('language-selector');
    const tabNav = document.getElementById('tab-nav');
    const tabs = document.querySelectorAll('.tab-content');
    const flashcardContainer = document.getElementById('flashcard-container');
    const flashcardTemplate = document.getElementById('flashcard-template');
    const prevWordBtn = document.getElementById('prev-word');
    const nextWordBtn = document.getElementById('next-word');
    const quizContainer = document.getElementById('quiz-container');
    const startQuizBtn = document.getElementById('start-quiz');
    const reviewWrongAnswersBtn = document.getElementById('review-wrong-answers');
    const vocabListContainer = document.getElementById('vocabulary-list');
    const searchBar = document.getElementById('search-bar');
    const categoryFilter = document.getElementById('category-filter');
    const favoritesFilterBtn = document.getElementById('favorites-filter');

    // --- I18N & UI FUNCTIONS ---
    const changeLanguage = (lang) => {
        state.language = lang;
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            el.textContent = i18n[lang][key];
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            el.placeholder = i18n[lang][key];
        });

        updateAllViews();
        saveState();
    };

    const updateAllViews = () => {
        renderFlashcard();
        renderVocabularyList();
        // The quiz view is rendered on start, but we update buttons
        updateQuizButtons();
    };

    // --- TAB NAVIGATION ---
    const switchTab = (tabId) => {
        state.activeTab = tabId;
        tabs.forEach(tab => tab.classList.remove('active'));
        document.getElementById(tabId).classList.add('active');

        document.querySelectorAll('.tab-link').forEach(link => {
            link.classList.toggle('active', link.dataset.tab === tabId);
        });
        updateAllViews();
    };

    // --- FLASHCARD FUNCTIONS ---
    const renderFlashcard = () => {
        const word = vocabulary[state.currentWordIndex];
        flashcardContainer.innerHTML = ''; // Clear previous card
        const card = flashcardTemplate.content.cloneNode(true);

        card.querySelector('.korean-word').textContent = word.korean;
        card.querySelector('.romanization').textContent = word.romanization;
        card.querySelector('.example-sentence-korean').textContent = word.example_ko;
        card.querySelector('.meaning').textContent = word[state.language];
        card.querySelector('.example-sentence-translation').textContent = word[`example_${state.language}`];
        
        const favoriteBtn = card.querySelector('.favorite-btn');
        favoriteBtn.classList.toggle('favorited', state.favorites.includes(word.id));
        favoriteBtn.textContent = state.favorites.includes(word.id) ? '★' : '☆';
        
        flashcardContainer.appendChild(card);

        // Re-add event listeners to the new card
        const newCard = flashcardContainer.querySelector('.flashcard');
        newCard.addEventListener('click', () => newCard.classList.toggle('flipped'));
        flashcardContainer.querySelector('.pronounce-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            pronounce(word.korean);
        });
        flashcardContainer.querySelector('.favorite-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            toggleFavorite(word.id);
        });
    };

    const pronounce = (text) => {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'ko-KR';
            window.speechSynthesis.speak(utterance);
        }
    };

    const toggleFavorite = (wordId) => {
        const index = state.favorites.indexOf(wordId);
        if (index > -1) {
            state.favorites.splice(index, 1);
        } else {
            state.favorites.push(wordId);
        }
        saveState();
        updateAllViews();
    };

    // --- QUIZ FUNCTIONS ---
    let currentQuizWords = [];

    const startQuiz = (wordsToTest = vocabulary) => {
        state.wrongAnswers = [];
        currentQuizWords = [...wordsToTest].sort(() => 0.5 - Math.random()); // Shuffle words
        let score = 0;
        let questionIndex = 0;

        const nextQuestion = () => {
            if (questionIndex >= currentQuizWords.length) {
                showQuizResults(score, currentQuizWords.length);
                return;
            }

            const word = currentQuizWords[questionIndex];
            const options = generateQuizOptions(word);
            
            quizContainer.innerHTML = `
                <div class="question">${word.korean} (${word.romanization})</div>
                <div class="options">
                    ${options.map(opt => `<button class="option" data-word-id="${opt.id}">${opt[state.language]}</button>`).join('')}
                </div>
                <p>${questionIndex + 1} / ${currentQuizWords.length}</p>
            `;

            quizContainer.querySelectorAll('.option').forEach(optionEl => {
                optionEl.addEventListener('click', () => {
                    const isCorrect = parseInt(optionEl.dataset.wordId) === word.id;
                    if (isCorrect) {
                        score++;
                        optionEl.classList.add('correct');
                    } else {
                        optionEl.classList.add('incorrect');
                        state.wrongAnswers.push(word.id);
                        // Highlight correct answer
                        quizContainer.querySelector(`[data-word-id="${word.id}"]`).classList.add('correct');
                    }
                    saveState();
                    setTimeout(nextQuestion, 1000);
                });
            });

            questionIndex++;
        };

        nextQuestion();
    };

    const generateQuizOptions = (correctWord) => {
        let options = [correctWord];
        while (options.length < 4) {
            const randomWord = vocabulary[Math.floor(Math.random() * vocabulary.length)];
            if (!options.some(opt => opt.id === randomWord.id)) {
                options.push(randomWord);
            }
        }
        return options.sort(() => 0.5 - Math.random()); // Shuffle options
    };

    const showQuizResults = (score, total) => {
        quizContainer.innerHTML = `
            <h2>${i18n[state.language].quizScore(score, total)}</h2>
        `;
        updateQuizButtons();
    };

    const updateQuizButtons = () => {
        startQuizBtn.style.display = 'block';
        reviewWrongAnswersBtn.style.display = state.wrongAnswers.length > 0 ? 'block' : 'none';
        reviewWrongAnswersBtn.textContent = i18n[state.language].reviewWrongAnswers + ` (${state.wrongAnswers.length})`;
    }

    // --- VOCABULARY LIST FUNCTIONS ---
    const renderVocabularyList = () => {
        const searchTerm = searchBar.value.toLowerCase();
        const selectedCategory = categoryFilter.value;
        const showFavorites = favoritesFilterBtn.classList.contains('active');

        const filteredVocab = vocabulary.filter(word => {
            const matchesSearch = word.korean.includes(searchTerm) || 
                                  word.romanization.toLowerCase().includes(searchTerm) ||
                                  word[state.language].toLowerCase().includes(searchTerm);
            const matchesCategory = selectedCategory === 'all' || word.category === selectedCategory;
            const matchesFavorites = !showFavorites || state.favorites.includes(word.id);
            return matchesSearch && matchesCategory && matchesFavorites;
        });

        vocabListContainer.innerHTML = filteredVocab.map(word => `
            <div class="vocab-item">
                <div>
                    <span class="korean-word">${word.korean}</span>
                    <span class="romanization">(${word.romanization})</span>
                </div>
                <div class="meaning">${word[state.language]}</div>
                <button class="favorite-btn ${state.favorites.includes(word.id) ? 'favorited' : ''}" data-word-id="${word.id}">
                    ${state.favorites.includes(word.id) ? '★' : '☆'}
                </button>
            </div>
        `).join('');
    };

    const populateCategories = () => {
        const categories = [...new Set(vocabulary.map(word => word.category))];
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category.charAt(0).toUpperCase() + category.slice(1);
            categoryFilter.appendChild(option);
        });
    };

    // --- INITIALIZATION & EVENT LISTENERS ---
    const init = () => {
        loadState();

        // Populate Language Selector
        Object.keys(i18n).forEach(lang => {
            const option = document.createElement('option');
            option.value = lang;
            option.textContent = { en: 'English', ko: '한국어', ja: '日本語', zh: '中文', es: 'Español' }[lang];
            languageSelector.appendChild(option);
        });
        languageSelector.value = state.language;
        
        populateCategories();
        changeLanguage(state.language);
        switchTab(state.activeTab);

        // Event Listeners
        themeToggleBtn.addEventListener('click', toggleTheme);
        languageSelector.addEventListener('change', (e) => changeLanguage(e.target.value));
        
        tabNav.addEventListener('click', (e) => {
            if (e.target.classList.contains('tab-link')) {
                switchTab(e.target.dataset.tab);
            }
        });

        document.getElementById('close-how-to-use').addEventListener('click', () => {
            document.getElementById('how-to-use').style.display = 'none';
        });

        prevWordBtn.addEventListener('click', () => {
            state.currentWordIndex = (state.currentWordIndex - 1 + vocabulary.length) % vocabulary.length;
            renderFlashcard();
        });

        nextWordBtn.addEventListener('click', () => {
            state.currentWordIndex = (state.currentWordIndex + 1) % vocabulary.length;
            renderFlashcard();
        });

        startQuizBtn.addEventListener('click', () => startQuiz());
        reviewWrongAnswersBtn.addEventListener('click', () => {
            const wordsToReview = vocabulary.filter(word => state.wrongAnswers.includes(word.id));
            if(wordsToReview.length > 0) {
                startQuiz(wordsToReview);
            }
        });

        searchBar.addEventListener('input', renderVocabularyList);
        categoryFilter.addEventListener('change', renderVocabularyList);
        favoritesFilterBtn.addEventListener('click', () => {
            favoritesFilterBtn.classList.toggle('active');
            renderVocabularyList();
        });
        vocabListContainer.addEventListener('click', (e) => {
            if(e.target.classList.contains('favorite-btn')) {
                toggleFavorite(parseInt(e.target.dataset.wordId));
            }
        });

        // Disqus Initialization
        initDisqus();
    };

    const initDisqus = () => {
        var d = document, s = d.createElement('script');
        s.src = 'https://snaplang.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    };

    init();
});
