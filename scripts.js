let slideshow_images = document.querySelector('#slideshow')
let image_names = [
    "slideshow/25-anniversary-link.jpeg",
    "slideshow/link-swings-sword.jpeg",
    "slideshow/tears-of-the-kingdom.jpeg",
    "https://nius.moviebloc.com/news/20230906/org/a35cd636925892de0b4e0b55e1e3abf8.jpg"
]
let current_image_index = 1;
let zelda_games = [];
let game_list = document.querySelector('#game-list')


setInterval(function() {
    slideshow_images.setAttribute("src", image_names[current_image_index])
    if (current_image_index == image_names.length - 1) {
        current_image_index = 0
    } else {
        current_image_index += 1
    }
}, 3000)


fetch('https://zelda.fanapis.com/api/games')
.then((res) => res.json())
.then((data) => {
    zelda_games = data.data.sort()

    zelda_games.forEach(game => {
        if (game.name.includes('gamelon')
        || game.released_date.includes('December 2, 2022')
        || game.name.includes('Ancient')) {
            return
        }

        console.log(game.name + ' ' + game.released_date);

        let image = document.createElement('img')

        let image_text = getImageName(game.name)
        
        image.setAttribute('src', image_text)
        image.setAttribute('class', 'game-images')
        let new_h4 = document.createElement('h4')
        let new_content = document.createTextNode(game.name + ' ' + game.released_date)
        new_h4.appendChild(new_content)
        let div = document.createElement('div')
        div.setAttribute('style', 'display: flex;')
        div.appendChild(image)
        div.appendChild(new_h4)
        game_list.appendChild(div);
    })
})

function getImageName(gameName) {
    if (gameName.includes('Adventure of Link')) {
        return 'game-list-images/adventure-of-link.jpeg'
    }

    if (gameName.includes('Breath')) {
        return 'game-list-images/botw.jpeg'
    }

    if (gameName.includes('Adventures')) {
        return 'game-list-images/four-sword.jpeg'
    }

    if (gameName.includes('Warriors')) {
        return 'game-list-images/hyrule-warriors.jpeg'
    }

    if (gameName.includes('Link to the Past')) {
        return 'game-list-images/link-to-the-past.jpeg'
    }

    if (gameName.includes('DX')) {
        return 'game-list-images/links-awakening-dx.jpeg'
    }

    if (gameName.includes('Majora')) {
        return 'game-list-images/majoras-mask.jpeg'
    }

    if (gameName.includes('Minish')) {
        return 'game-list-images/minish-cap.jpeg'
    }

    if (gameName.includes('nes')) {
        return 'game-list-images/adventure-of-link.png'
    }

    if (gameName.includes('Ocarina')) {
        return 'game-list-images/ocarina-of-time.jpeg'
    }

    if (gameName.includes('Ages')) {
        return 'game-list-images/oracle-of-ages.jpeg'
    }

    if (gameName.includes('Seasons')) {
        return 'game-list-images/oracle-of-seasons.jpeg'
    }

    if (gameName.includes('Tracks')) {
        return 'game-list-images/spirit-tracks.jpeg'
    }

    if (gameName.includes('Heroes')) {
        return 'game-list-images/triforce-heroes.jpeg'
    }

    if (gameName.includes('Princess')) {
        return 'game-list-images/twilight-princess.jpeg'
    }

    if (gameName.includes('Waker')) {
        return 'game-list-images/wind-waker.jpeg'
    }

    return 'game-list-images/nes.jpeg';
}