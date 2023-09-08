const container = document.querySelector('.hero_banner');

const imgUrl = ["./images/debut-wallpaper.jpg", 
                "images/fearless-wallpaper.jpg",
                "images/speak-now-wallpaper.jpg",
                "images/red-wallpaper.jpg",
                "images/1989-wallpaper.jpg",
                "images/reputation-wallpaper.jpg", 
                "images/lover-wallpaper.jpg",
                "images/evermore-wallpaper.jpg",
                "images/folklore-wallpaper.jpg",
                "images/midnights-wallpaper.jpg"]

for (let i = 0; i <10; i++) {
    const blocks = document.createElement('div');
    blocks.classList.add('block');
    blocks.dataset.style = (i + 1).toString();
    container.appendChild(blocks);

    blocks.style.backgroundImage = `url(${imgUrl[i]})`;
}

function generate() {
    const blocks = document.querySelectorAll('.block');

    // Show the blocks before animation
    blocks.forEach(block => {
        block.style.display = 'block';
    });

    anime({
        targets: '.block',
        translateX: function () {
            return anime.random(-650, 650);
        },
        translateY: function () {
            return anime.random(-150, 150);
        }
    });

    // Add click event listener to the blocks
    blocks.forEach(block => {
        block.addEventListener('click', function () {
            shatterBlock(this);
        });
    });

    
}



function shatterBlock(clickedBlock) {
    const blocks = document.querySelectorAll('.block');
    blocks.forEach(block => {
        block.style.display = 'none';
    });

    const headerText = document.querySelector('header h1');
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const body = document.body;
    const coolor = clickedBlock.dataset.style;
    const banner = document.getElementById('sec-1');
    const button = document.getElementById('magic');
    const merch = document.querySelector('.merch');
    const shopnow = document.getElementById('shop-now');
    const contain = document.getElementById('sec-4');
    const find = document.getElementById('find');

    if (coolor === '1') {
        body.style.backgroundColor = 'var(--debut-primary-colour)';
        headerText.style.fontFamily = 'var(--debut-font)';
        headerText.style.color = 'var(--debut-primary-colour)';
        button.style.backgroundColor = 'var(--debut-secondary-colour)';
        button.style.fontFamily = 'var(--debut-font)';
        button.style.color = 'var(--debut-primary-colour)';
        header.style.backgroundColor = 'var(--debut-secondary-colour)';
        footer.style.backgroundColor = 'var(--debut-secondary-colour)';
        banner.style.backgroundImage = "url('images/debut-banner.png')";
        merch.style.color = 'var(--debut-secondary-colour)';
        shopnow.style.backgroundColor = 'var(--debut-secondary-colour)';
        shopnow.style.fontFamily = 'var(--debut-font)';
        shopnow.style.color = 'var(--debut-primary-colour)';
        contain.style.backgroundColor = 'var(--debut-secondary-colour)';
        find.style.backgroundColor = 'var(--debut-secondary-colour)';
        find.style.fontFamily = 'var(--debut-font)';
        find.style.color = 'var(--debut-primary-colour)';
    } else if (coolor === '2') {
        body.style.backgroundColor = 'var(--fearless-primary-colour)';
        headerText.style.fontFamily = 'var(--fearless-font)';
        headerText.style.color = 'var(--fearless-primary-colour)';
        button.style.backgroundColor = 'var(--fearless-secondary-colour)';
        button.style.fontFamily = 'var(--fearless-font)';
        button.style.color = 'var(--fearless-primary-colour)';
        header.style.backgroundColor = 'var(--fearless-secondary-colour)';
        footer.style.backgroundColor = 'var(--fearless-secondary-colour)';
        banner.style.backgroundImage = "url('images/fearless-banner.png')";
        merch.style.color = 'var(--fearless-secondary-colour)';
        shopnow.style.backgroundColor = 'var(--fearless-secondary-colour)';
        shopnow.style.fontFamily = 'var(--fearless-font)';
        shopnow.style.color = 'var(--fearless-primary-colour)';
        contain.style.backgroundColor = 'var(--fearless-secondary-colour)';
        find.style.backgroundColor = 'var(--fearless-secondary-colour)';
        find.style.fontFamily = 'var(--fearless-font)';
        find.style.color = 'var(--fearless-primary-colour)';
    } else if (coolor === '3') {
        body.style.backgroundColor = 'var(--speak-now-primary-colour)';
        headerText.style.fontFamily = 'var(--speak-now-font)';
        headerText.style.color = 'var(--speak-now-primary-colour)';
        button.style.backgroundColor = 'var(--speak-now-secondary-colour)';
        button.style.fontFamily = 'var(--speak-now-font)';
        button.style.color = 'var(--speak-now-primary-colour)';
        header.style.backgroundColor = 'var(--speak-now-secondary-colour)';
        footer.style.backgroundColor = 'var(--speak-now-secondary-colour)';
        banner.style.backgroundImage = "url('images/speak-now-banner.png')";
        merch.style.color = 'var(--speak-now-secondary-colour)';
        shopnow.style.backgroundColor = 'var(--speak-now-secondary-colour)';
        shopnow.style.fontFamily = 'var(--speak-now-font)';
        shopnow.style.color = 'var(--speak-now-primary-colour)';
        contain.style.backgroundColor = 'var(--speak-now-secondary-colour)';
        find.style.backgroundColor = 'var(--speak-now-secondary-colour)';
        find.style.fontFamily = 'var(--speak-now-font)';
        find.style.color = 'var(--speak-now-primary-colour)';
    } else if (coolor === '4') {
        body.style.backgroundColor = 'var(--red-primary-colour)';
        headerText.style.fontFamily = 'var(--red-font)';
        headerText.style.color = 'var(--red-primary-colour)';
        button.style.backgroundColor = 'var(--red-secondary-colour)';
        button.style.fontFamily = 'var(--red-font)';
        button.style.color = 'var(--red-primary-colour)';
        header.style.backgroundColor = 'var(--red-secondary-colour)';
        footer.style.backgroundColor = 'var(--red-secondary-colour)';
        banner.style.backgroundImage = "url('images/red-banner.png')";
        merch.style.color = 'var(--red-secondary-colour)';
        shopnow.style.backgroundColor = 'var(--red-secondary-colour)';
        shopnow.style.fontFamily = 'var(--red-font)';
        shopnow.style.color = 'var(--red-primary-colour)';
        contain.style.backgroundColor = 'var(--red-secondary-colour)';
        find.style.backgroundColor = 'var(--red-secondary-colour)';
        find.style.fontFamily = 'var(--red-font)';
        find.style.color = 'var(--red-primary-colour)';
    } else if (coolor === '5') {
        body.style.backgroundColor = 'var(--1989-primary-colour)';
        headerText.style.fontFamily = 'var(--1989-font)';
        headerText.style.color = 'var(--1989-primary-colour)';
        button.style.backgroundColor = 'var(--1989-secondary-colour)';
        button.style.fontFamily = 'var(--1989-font)';
        button.style.color = 'var(--1989-primary-colour)';
        header.style.backgroundColor = 'var(--1989-secondary-colour)';
        footer.style.backgroundColor = 'var(--1989-secondary-colour)';
        banner.style.backgroundImage = "url('images/1989-banner.png')";
        merch.style.color = 'var(--1989-secondary-colour)';
        shopnow.style.backgroundColor = 'var(--1989-secondary-colour)';
        shopnow.style.fontFamily = 'var(--1989-font)';
        shopnow.style.color = 'var(--1989-primary-colour)';
        contain.style.backgroundColor = 'var(--1989-secondary-colour)';
        find.style.backgroundColor = 'var(--1989-secondary-colour)';
        find.style.fontFamily = 'var(--1989-font)';
        find.style.color = 'var(--1989-primary-colour)';
    } else if (coolor === '6') {
        body.style.backgroundColor = 'var(--reputation-primary-colour)';
        headerText.style.fontFamily = 'var(--reputation-font)';
        headerText.style.color = 'var(--reputation-primary-colour)';
        button.style.backgroundColor = 'var(--reputation-secondary-colour)';
        button.style.fontFamily = 'var(--reputation-font)';
        button.style.color = 'var(--reputation-primary-colour)';
        header.style.backgroundColor = 'var(--reputation-secondary-colour)';
        footer.style.backgroundColor = 'var(--reputation-secondary-colour)';
        banner.style.backgroundImage = "url('images/reputation-banner.png')";
        merch.style.color = 'var(--reputation-secondary-colour)';
        shopnow.style.backgroundColor = 'var(--reputation-secondary-colour)';
        shopnow.style.fontFamily = 'var(--reputation-font)';
        shopnow.style.color = 'var(--reputation-primary-colour)';
        contain.style.backgroundColor = 'var(--reputation-secondary-colour)';
        find.style.backgroundColor = 'var(--reputation-secondary-colour)';
        find.style.fontFamily = 'var(--reputation-font)';
        find.style.color = 'var(--reputation-primary-colour)';        
    } else if (coolor === '7') {
        body.style.backgroundColor = 'var(--lover-primary-colour)';
        headerText.style.fontFamily = 'var(--lover-font)';
        headerText.style.color = 'var(--lover-primary-colour)';
        button.style.backgroundColor = 'var(--lover-secondary-colour)';
        button.style.fontFamily = 'var(--lover-font)';
        button.style.color = 'var(--lover-primary-colour)';
        header.style.backgroundColor = 'var(--lover-secondary-colour)';
        footer.style.backgroundColor = 'var(--lover-secondary-colour)';
        banner.style.backgroundImage = "url('images/lover-banner.png')";
        merch.style.color = 'var(--lover-secondary-colour)';
        shopnow.style.backgroundColor = 'var(--lover-secondary-colour)';
        shopnow.style.fontFamily = 'var(--lover-font)';
        shopnow.style.color = 'var(--lover-primary-colour)';
        contain.style.backgroundColor = 'var(--lover-secondary-colour)';
        find.style.backgroundColor = 'var(--lover-secondary-colour)';
        find.style.fontFamily = 'var(--lover-font)';
        find.style.color = 'var(--lover-primary-colour)';
    } else if (coolor === '8') {
        body.style.backgroundColor = 'var(--evermore-primary-colour)';
        headerText.style.fontFamily = 'var(--evermore-font)';
        headerText.style.color = 'var(--evermore-primary-colour)';
        button.style.backgroundColor = 'var(--evermore-secondary-colour)';
        button.style.fontFamily = 'var(--evermore-font)';
        button.style.color = 'var(--evermore-primary-colour)';
        header.style.backgroundColor = 'var(--evermore-secondary-colour)';
        footer.style.backgroundColor = 'var(--evermore-secondary-colour)';
        banner.style.backgroundImage = "url('images/evermore-banner.png')";
        merch.style.color = 'var(--evermore-secondary-colour)';
        shopnow.style.backgroundColor = 'var(--evermore-secondary-colour)';
        shopnow.style.fontFamily = 'var(--evermore-font)';
        shopnow.style.color = 'var(--evermore-primary-colour)';
        contain.style.backgroundColor = 'var(--evermore-secondary-colour)';
        find.style.backgroundColor = 'var(--evermore-secondary-colour)';
        find.style.fontFamily = 'var(--evermore-font)';
        find.style.color = 'var(--evermore-primary-colour)';
    } else if (coolor === '9') {
        body.style.backgroundColor = 'var(--folklore-primary-colour)';
        headerText.style.fontFamily = 'var(--folklore-font)';
        headerText.style.color = 'var(--folklore-primary-colour)';
        button.style.backgroundColor = 'var(--folklore-secondary-colour)';
        button.style.fontFamily = 'var(--folklore-font)';
        button.style.color = 'var(--folklore-primary-colour)';
        header.style.backgroundColor = 'var(--folklore-secondary-colour)';
        footer.style.backgroundColor = 'var(--folklore-secondary-colour)';
        banner.style.backgroundImage = "url('images/folklore-banner.png')";
        merch.style.color = 'var(--folklore-secondary-colour)';
        shopnow.style.backgroundColor = 'var(--folklore-secondary-colour)';
        shopnow.style.fontFamily = 'var(--folklore-font)';
        shopnow.style.color = 'var(--folklore-primary-colour)';
        contain.style.backgroundColor = 'var(--folklore-secondary-colour)';
        find.style.backgroundColor = 'var(--folklore-secondary-colour)';
        find.style.fontFamily = 'var(--folklore-font)';
        find.style.color = 'var(--folklore-primary-colour)';
    } else if (coolor === '10') {
        body.style.backgroundColor = 'var(--midnights-primary-colour)';
        headerText.style.fontFamily = 'var(--midnights-font)';
        headerText.style.color = 'var(--midnights-primary-colour)';
        button.style.backgroundColor = 'var(--midnights-secondary-colour)';
        button.style.fontFamily = 'var(--midnights-font)';
        button.style.color = 'var(--midnights-primary-colour)';
        header.style.backgroundColor = 'var(--midnights-secondary-colour)';
        footer.style.backgroundColor = 'var(--midnights-secondary-colour)';
        banner.style.backgroundImage = "url('images/midnights-banner.png')";
        merch.style.color = 'var(--midnights-secondary-colour)';
        shopnow.style.backgroundColor = 'var(--midnights-secondary-colour)';
        shopnow.style.fontFamily = 'var(--midnights-font)';
        shopnow.style.color = 'var(--midnights-primary-colour)';
        contain.style.backgroundColor = 'var(--midnights-secondary-colour)';
        find.style.backgroundColor = 'var(--midnights-secondary-colour)';
        find.style.fontFamily = 'var(--midnights-font)';
        find.style.color = 'var(--midnights-primary-colour)';
    }
}


//for movie section
document.addEventListener('DOMContentLoaded', function() {
    // Get the elements for animation
    const sec2 = document.querySelector('.sec-2');
    const countdownSection = document.querySelector('.countdown-section');
    const video = document.getElementById('video');

    // Function to trigger animations when in viewport
    function triggerAnimations() {
        sec2.classList.add('in-viewport');
        setTimeout(function() {
            countdownSection.style.display = 'none';
            video.style.display = 'block';
            video.play();
        }, 3000); // Assuming your animation lasts 3 seconds, adjust this if needed
    }

    // Intersection Observer to trigger animations
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                triggerAnimations();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    observer.observe(sec2);
});






// for merch
$(document).ready(function() {
	var li, html, src, padding, max, bg=0, psbg, enableScroll,
	    goX, goY, scroll, mdown, u, undo, scrolly,
	    isActive='false',
	    ul = $('#clothesCarousel'),
		shirt = ul.find('a.clothWrap'),
	    n=ul.children('li').length-1,
		wrap=$('#clothesWrapper');
	
	function goPrev() {
		isActive='true';
		
		html=ul.children('li').eq(n);
		ul.children('li').eq(n).remove();
		ul.prepend(html);
		
		ul.addClass('prev');
		
		setTimeout(function() {
			isActive='false';
			ul.removeClass('prev');
		}, 1000);
	}
	
	function goNext() {
		isActive='true';
		
		html=ul.children('li').eq(0);
		ul.children('li').eq(0).remove();
		ul.append(html);
		
		ul.addClass('next');
		
		setTimeout(function() {
			isActive='false';
			ul.removeClass('next');
		}, 1000);
	}
	
	function pseudoScroll(u) {
		if(u>50) {
			u=50
		}
		else if(u<-50) {
			u=-50
		}
		ul.children('li').css('margin-left', u+'px');
	}
	
	$('#prevClothes').click(function() {
		if(isActive!='true') {
			goPrev();
		}
	});
	
	$('#nextClothes').click(function() {
		if(isActive!='true') {
			goNext();
		}
	});
	
	$('body').keydown(function(e) {
		if(isActive!='true') {
			if(e.keyCode==37) {
				goPrev();
			}
			if(e.keyCode==39) {
				goNext();
			}
		}
	});
	
	ul.on('mousedown touchstart', 'a.clothWrap', function() {
		ul.children('li').css('transition', 'margin-left 0s');
	});
	
	ul.on('mousedown', 'a.clothWrap', function(e) {
		e.preventDefault();
		goX=e.pageX;
		
		src=$(this).attr('href');
		mdown='true';
		enableScroll='false';
	});
	
	ul.on('touchstart', 'a.clothWrap', function(e) {
		e.preventDefault();
		goX=e.originalEvent.touches[0].pageX;
		goY=e.originalEvent.touches[0].pageY;
		
		src=$(this).attr('href');
		mdown='true';
		enableScroll='false';
	});

	$(window).on('mousemove', function(e) {
		if(mdown=='true') {
			scroll=(e.pageX-goX)/8;
			pseudoScroll(scroll);
		}
	});

	$(window).on('touchmove', function(e) {
		if(mdown=='true') {
			scroll=(e.originalEvent.touches[0].pageX-goX)/5;
			undo=e.originalEvent.touches[0].pageY-goY;
			
			if(scroll<25 && scroll>-25) {
				max=70;
			}
			else {
				max=140;
			}
			
			if(undo>max) {
				enableScroll = 'true';
				padding=max;
			}
			else if(undo<-max) {
				enableScroll = 'true';
				padding=-max;
			}
			
			if(enableScroll=='true') {
				$(window).scrollTop(scrolly-undo+padding);
			}
			pseudoScroll(scroll);
		}
	});

	$(window).on('mouseup touchend', function() {
		ul.children('li').css({
			'transition': 'margin-left 0.4s, left 0.8s, opacity 0.8s',
			'margin-left': '0'
		});
		
		setTimeout(function() {
			ul.children('li').css({
				'transition': 'margin-left 0, left 0.8s, opacity 0.8s'
			});
		}, 400);
		
		if(scroll>5) {
			if(isActive!='true') {
				scroll=0;
				goPrev();
			}
		}
		else if(scroll<-5) {
			if(isActive!='true') {
				goNext();
			}
		}
		else {
			if(src!='' && enableScroll=='false') {
				// Link URL is stored as variable called 'src'
				// Re-direct to 'src' now...
				
				window.location.replace(src);
			}
		}
		
		scroll=0;
		mdown='false';
		enableScroll='false';
		src='';
	});
});


// for picture gallery
const images = Array.from(document.querySelectorAll('.grid img'));
const modal = document.querySelector('.modal');

const closeBtn = document.querySelector('.btn');


images.forEach(image => {
  image.addEventListener('click', () => {
    modal.classList.add('active');
    const img = document.createElement('img');
    img.src = image.src;
    if(modal.children[1]){
      modal.removeChild(modal.children[1]);
    }
    modal.appendChild(img);
  })
})

window.addEventListener('click', (e) => {
  if(e.target === modal){
    modal.classList.remove('active');
  }
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
})


//for coming soon sec

$(".overlay").mousemove(function(e){
    var x = e.offsetX;
    var y = e.offsetY;
    $(".hole").css({top: y+'px', left: x +'px'});
});