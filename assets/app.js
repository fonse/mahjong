var yakuList = {
    "Riichi": {},
    "Ippatsu": {
        desc: "Winning within 1 turn of riichi"
    },
    "Tsumo": {
        desc: "Winning with a self-draw"
    },
    "Pin Fu": {
        desc: "All chi, no yakuhai, edge wait",
        hand: "1m 2m 3m 2p 3p 4p 4p 5p 6p 6s 7s 9s 9s 5s"
    },
    "Tan Yao": {
        desc: "No 1, 9 or honors",
        hand: "2m 3m 4m 7m 7m 7m 2p 3p 4p 3s 3s 4s 4s 4s"
    },
    "Yakuhai": {
        desc: "Pon of dragons or winds",
        hand: "5m 6m 7m 6p 8p 4s 5s 6s 8s 8s hatsu hatsu hatsu 7p"
    },
    "Chii Toitsu": {
        desc: "Seven pairs",
        hand: "2m 2m 9m 9m 8p 8p 2s e e w w haku haku 2s"
    },

    "Iipeiko": {
        desc: "Two identical chi",
        hand: "1p 1p 2p 2p 3p 3p 3s 4s 5s 6s 7s n n 8s"
    },
    "Ryanpeiko": {
        desc: "Two pairs of identical chi",
        hand: "5m 5m 1p 1p 2p 3p 3p 5s 5s 6s 6s 7s 7s 2p"
    },
    "Sanshoku": {
        desc: "Same chi in all 3 suits",
        hand: "6m 7m 8m 1p 1p 6p 7p 8p 2s 3s 4s 7s 8s 6s"
    },
    "Itsuu": {
        desc: "123 456 789",
        hand: "4p 5p 6p 8p 8p 1s 2s 3s 4s 5s 6s 7s 9s 8s"
    },

    "Toi Toi": {
        desc: "All pon",
        hand: "2m 2m 2m 9m 9m 9m 7p 7p 7p 2s 2s haku haku 2s"
    },
    "Sanshoku Doukou": {
        desc: "Same pon in all 3 suits",
        hand: "1m 1m 1s 1s 1s 3s 4s 5s 1p 1p 1p 5p 5p 1m"
    },
    "San Ankou": {
        desc: "3 closed pon"
    },
    "San Kantsu": {
        desc: "3 kans"
    },
    "Shou Sangen": {
        desc: "2 pon and pair of dragons",
        hand: "2s 3s 3s 4s 4s 5s haku haku chun chun chun hatsu hatsu hatsu"
    },

    "Hon Itsu": {
        desc: "One suit with honors",
        hand: "1s 2s 2s 2s 3s 4s 5s 6s 8s 8s w w w 8s"
    },
    "Chin Itsu": {
        desc: "One suit without honors",
        hand: "1p 2p 2p 3p 3p 4p 5p 6p 7p 8p 9p 9p 9p 8p"
    },
    "Chanta": {
        desc: "All contain 1, 9 or honors",
        hand: "1m 1m 1m 7m 8m 9m 1s 2s 3s n n haku haku n"
    },
    "Junchan": {
        desc: "All contain 1 or 9",
        hand: "9m 9m 1p 1p 2p 2p 3p 1s 1s 1s 7s 8s 9s 3p"
    },
    "Honrou": {
        desc: "Only 1, 9 or honors",
        hand: "1m 1m 1m 9m 9m 1p 1p 1p e e e s s 9m"
    },
};

function buildHand(str){
    var $hand = $('<div class="hand m-half-top"></div>').hide();
    var tiles = str.split(' ');

    $.each(tiles, function(i, tile){
        $hand.append(buildTile(tile));
    });

    return $hand;
}

function buildTile(str){
    var _class = str.length == 2 ? str.split("").reverse().join("") : str;

    return $('<i class="' + _class + ' xs-tile"></i>');
}

function processYakuTable($table){
    $table.find('tbody tr').each(function(i, tr){
        var $tr = $(tr);
        var $td = $tr.children("td").eq(0);

        var yaku = yakuList[$td.text()] || {};
        if (yaku.desc){
            $td.append(' <em class="small">(' + yaku.desc + ')</em>')
        }
        if (yaku.hand){
            var $hand = buildHand(yaku.hand);
            $td.append($hand)

            $tr.css("cursor", "pointer").click(function(){
                $(this).find(".hand").toggle();
            });
        }
    });
}

$(document).ready(function(){
    processYakuTable($(".js-yaku-table"));
    $('body').scrollspy({ target: '#navbar' });
});
