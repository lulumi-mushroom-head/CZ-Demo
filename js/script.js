Vue.createApp({
        data: function(){
            return{ 
                text: '',
                name: '',
                link:[
                        {
                                name: '首頁',
                                url: 'https://google.com',
                         },
                         {
                                name: '公司介紹',
                                url: 'https://google.com',
                         },
                         {
                                name: '品質控管及政策',
                                url: 'https://google.com',
                         },{
                                name: '機械設備',
                                url: 'https://google.com',
                         },{
                                name: '生產及服務項目',
                                url: 'https://google.com',
                         },
                ]
                
              }
        }
    }).mount('#abb');