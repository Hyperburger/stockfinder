'use strcit'



document.querySelector('.button').addEventListener('click', function() {
    let ourValue = document.getElementsByClassName('search')[0].value

    window.open(`https://finviz.com/quote.ashx?t=${ourValue}&ty=c&ta=1&p=d`)
    window.open(`https://app.chaikinanalytics.com/pgr-widget/?symbol=${ourValue}`)
    window.open(`https://bigcharts.marketwatch.com/advchart/frames/frames.asp?show=&insttype=Stock&symb=${ourValue}&time=8&startdate=1%2F4%2F1999&enddate=4%2F22%2F2022&freq=1&compidx=aaaaa%3A0&comptemptext=&comp=none&ma=0&maval=9&uf=0&lf=67108864&lf2=0&lf3=0&type=64&style=320&size=4&x=50&y=18&timeFrameToggle=false&compareToToggle=false&indicatorsToggle=false&chartStyleToggle=false&state=15`)


})

