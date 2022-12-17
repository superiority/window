const array = [
    {id: 1, type: 'car', price: 1231232, img: 'https://play-lh.googleusercontent.com/BcXJsZhO9DLwEsIIkZQh7h1j2VCRxExBsawbYaVjQ3dBBC3PJ4uB5yhUZfv3spMRvJ8=w526-h296-rw'},
    {id: 2, type: 'house', price: 123123456, img: 'https://houses.ru/upload/medialibrary/fa9/niko01.jpg' },
    {id: 3, type: 'space', price: 4534534345345, img: 'https://cdn.sanity.io/images/2yyup5mx/production/d5a915cd9db3444998926f61645b6f83a53aced0-5000x2813.jpg' }
]

const modal = $.modal( {
    title: 'Window',
    closable: true,
    content: `<pre>${array}</pre>`,
    width: '800px',
    footerButtons: [
        {text: 'ok', type: 'primary', handler() {
            console.log('ok')
                modal.close()
            }},
        {text: 'cancel', type: 'danger', handler() {
            console.log('cancel')
                modal.close()
            }}
    ]
})