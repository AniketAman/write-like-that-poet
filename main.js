$(() => {
  var $el = $("#generate"),
    $field = $("#field"),
    actions,
    oscillations,
    emotions,
    movement,
    facialFeature,
    phenomena;

  function get_random_word(set_of_words) {
    let len = set_of_words.length;
    return set_of_words[Math.floor(Math.random() * len)];
  }

  $el.on("click", generate_Couplet);

  function generate_Couplet() {
    $field.fadeOut(300);
    let couplet = `${get_random_word(oscillations)} Hue ${get_random_word(
      facialFeature
    )} Se ${get_random_word(phenomena)} ka ${get_random_word(actions)}.
      ${get_random_word(emotions)} hai mujhe tera wahi ${get_random_word(
      movement
    )}`;
    console.log(couplet,"   --Waah Waah! Waah Waah ;)");
    setTimeout( () => {
      $field.text(couplet);
      $field.fadeIn(300);
    }, 500)
  }


  function get_all_jsons() {
    actions = ["Phisalna", "Girna", "Tapakna", "Ulajhna", "Sulajhna", "Nikalna", "Sawarna"];
    oscillations = ["Thikartey", "Simat-tey", "Jhulastey"];
    emotions = ["Yaad", "Darata", "Hasata", "Rulata"];
    movement = ["Duur Jaana", "Paas Aana", "Roshni Phailana", "Gumm ho Jaana"];
    phenomena = ["Boond", "Oas", "Baarish", "Hawa"];
    facialFeature = ["Nazaron", "Hothon", "Nainon", "Gaalon", "Maathey"];
  }

  get_all_jsons();
});
