var Tab = (function() {

  function _Tab(tabSelector) {
    this.container = document.querySelector(tabSelector);
    this.tabNavs = this.container.querySelectorAll('.tab-nav > li');
    this.tabBodies = this.container.querySelectorAll('.tab-body > div');
    this.currentIndex = 0;
    this.bind();
  }
  _Tab.prototype.showPanel = function (index) {
    if (index === this.currentIndex) {
      return;
    }
    this.tabNavs[this.currentIndex].classList.remove('active');
    this.tabBodies[this.currentIndex].classList.remove('active');
    this.tabNavs[index].classList.add('active');
    this.tabBodies[index].classList.add('active');
    this.currentIndex = index;
  }
  _Tab.prototype.bind = function () {
    var _this = this;
    for (var i = 0; i < this.tabNavs.length; i++) {
      this.tabNavs[i].addEventListener('click', function() {
        var index = [].indexOf.call(_this.tabNavs, this);
        _this.showPanel(index);
        _this.currentIndex = index;
      }, false);
    }
  }

  return {
    init: function(container) {
      new _Tab(container);
    }
  }

})();