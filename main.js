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
    let couplet = `${get_random_word(oscillations)} Hue ${get_random_word(
      facialFeature
    )} Se ${get_random_word(phenomena)} ka ${get_random_word(actions)}.
      ${get_random_word(emotions)} hai mujhe tera wahi ${get_random_word(
      movement
    )}`;
    console.log(couplet,"   --Waah Waah! Waah Waah ;)");
    $field.text(couplet);
  }


  function get_all_jsons() {
    $.get("/couplet-jsons/actions.json").done(resp => {
      actions = resp.data;
    });
    $.get("/couplet-jsons/oscillation.json").done(resp => {
      oscillations = resp.data;
    });
    $.get("/couplet-jsons/emotions.json").done(resp => {
      emotions = resp.data;
    });

    $.get("/couplet-jsons/movement.json").done(resp => {
      movement = resp.data;
    });
    $.get("/couplet-jsons/phenomena.json").done(resp => {
      phenomena = resp.data;
    });
    $.get("/couplet-jsons/facialFeature.json").done(resp => {
      facialFeature = resp.data;
    });
  }

  get_all_jsons();
});
