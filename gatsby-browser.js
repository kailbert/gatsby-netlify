import { anchorate } from 'anchorate'
import $ from 'jquery'
exports.onRouteUpdate = () => {
    anchorate({ 
        scroller: function (element) {
          if (!element) return false
            //   element.scrollIntoView({ behavior: 'smooth' })
            $('html, body').animate({
                scrollTop: $(element).offset().top
            }, 1200);
          return true
        }
      })
}
