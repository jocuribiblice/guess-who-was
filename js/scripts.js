$(document).ready(function() {
  window.possible_words = [
    ["adam", "primul om"],
    ["eva", "prima femeie"],
    ["cain", "primul copil născut"],
    ["abel", "ucis de Cain"],
    ["set", "copil al lui Adam"],
    ["enoh", "a umblat cu Dumnezeu"],
    ["metusala", "a trăit mult"],
    ["lameh", "tatăl lui Noe"],
    ["noe", "a construit o arcă"],
    ["sem", "fiu al lui Noe"],
    ["ham", "fiu al lui Noe"],
    ["iafet", "fiu al lui Noe"],
    ["terah", "tatăl lui Avraam"],
    ["avraam", "părintele credincioșilor"],
    ["sara", "soția lui Avraam"],
    ["moise", "a scris Geneza"],
    ["pavel", "a scris epistole"],
    ["zacheu", "s-a urcat într-un copac"],
    ["estera", "împărăteasă frumoasă"],
    ["mardoheu", "apare în cartea Estera"],
    ["aaron", "fratele lui Moise"],
    ["aaron", "fratele lui Moise"],
    ["beniamin", "fiu al lui Iacov"],
    ["iosif", "vândut ca rob în Egipt"],
    ["lazăr", "înviat de Isus"],
  ];
  window.game_is_finished = false;
  window.hint = "";
  window.word = "";


  function get_random_definition() {
    var random_number = Math.floor(Math.random() * possible_words.length);
    var selected_word = possible_words[random_number];
    return selected_word;
  }


  function choose_word() {
    var selected_word = get_random_definition();
    window.word = selected_word[0];
    window.hint = selected_word[1];
  }


  function choose_answers() {
    var answers = [];
    answers.push([window.word, window.hint]);

    while (answers.length <= 4) {
      var new_answer = get_random_definition();

      var exists = false;
      for (var j = 0; j < answers.length; j++) {
        if (answers[j][0] == new_answer[0] || answers[j][1] == new_answer[1]) {
          exists = true;
        }
      }

      if (!exists) {
        answers.push(new_answer);
      }
    }

    for (var i = 0; i < answers.length; i++) {
      $("p.controls").append(
        "<a href='#' class='btn btn-warning btn-answer'>" + answers[i][0].toUpperCase() + "</a>"
      );
    }
  }


  function game_over() {
    $("p#status").text("Răspuns corect: " + window.word.toUpperCase());
    game_is_finished = true;
  }


  function win() {
    $("p#status").text("Felicitări!");
    $("p#status").css({"background": "#2ecc71"});
    game_is_finished = true;
  }


  function start_game() {
    choose_word();
    choose_answers();
    $("p#status").text("Descriere: " + window.hint);
  }

  start_game();
});
