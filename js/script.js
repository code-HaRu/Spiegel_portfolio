/* ---------------------------------
* swiper
* --------------------------------- */
const swiper1 = new Swiper('.swiper1', {
  // Optional parameters
  loop: true, // ループさせる
  speed: 1000,  // スライドの速さ
  slidesPerView: 1,

  // マウスやタッチでスライドさせる
  mousewheel: {
    forceToAxis: true,// スライドの方向があってる場合のみ作動
    invert: false// スクロールの方向に移動
  },

  // ページネーション
  pagination: {
    el: '.page1',
    type: 'bullets', // ページネーションのタイプ
    clickable: true, // クリックで移動
  },

  // ボタン
  navigation: {
    nextEl: '.next1',
    prevEl: '.prev1',
  },

  // 自動再生
	autoplay: {
		delay: 3000,// 再生の間隔
		disableOnInteraction: false, // ユーザの操作後も再生を続ける
	},
});

/* ---------------------------------
* swiper
* --------------------------------- */
const swiper2 = new Swiper('.swiper2', {
  // Optional parameters
  loop: true,
  speed: 1000,  // スライドの速さ
  slidesPerView: 1,

  // マウスやタッチでスライドさせる
  mousewheel: {
    forceToAxis: true,// スライドの方向があってる場合のみ作動
    invert: false// スクロールの方向に移動
  },

  // ページネーション
  pagination: {
    el: '.page2',
    type: 'bullets', // ページネーションのタイプ
    clickable: true, // クリックで移動
  },

  // ボタン
  navigation: {
    nextEl: '.next2',
    prevEl: '.prev2',
  },

  // 自動再生
	autoplay: {
		delay: 3000,// 再生の間隔
		disableOnInteraction: false, // ユーザの操作後も再生を続ける
	},
});
