import wepy from 'wepy'
export default class Voice extends wepy.mixin {
    // 合成语音
    async getclient(text, time, voice, onoff = 0, _dd = true) {
        let _config = wepy.getStorageSync('config')
        if (_config.is_voice != 1 && onoff == 0 && _config.custom_voice_open != 1) {
            return false
        }
        if (JSON.stringify(this.b_token) == '{}') {
            await this.getBaidyToken();
        }
        
        if(text == 'saysay'){
            time = 1
            text = _config.custom_voice_content || '请先编辑内容'
            voice = _config.custom_voice_option
            _dd = false
        }
        if (_dd) {
            var dd = `https://images.kuan1.cn/kuan1/wechat/trailer/test/dingdong.mp3`
            this.audioCtx.src = dd;
            this.audioCtx.play()
        }
        setTimeout(() => {
            console.log(time)
            let _time = time || Number(_config.broadcast_num), _text = text

            for (let i = 1; i < _time; i++) {
                _text = _text.concat('，' + text)
            }
            let _per = voice || _config.voice
            let params = {
                ctp: 1, //客户端类型选择，web端填写固定值1
                lan: 'zh', //固定值zh。语言选择,目前只有中英文混合模式，填写固定值zh
                spd: _per == 4 ? '4' : '5', //语速，取值0-15，默认为5中语速
                pit: '5', //音调，取值0-15，默认为5中语调
                vol: '5', //音量，取值0-15，默认为5中音量
                per: _per, //发音人选择, 0为普通女声，1为普通男生，3为情感合成-度逍遥，4为情感合成-度丫丫，默认为普通女声
                aue: '3' //3为mp3格式(默认)； 4为pcm-16k；5为pcm-8k；6为wav（内容同pcm-16k）; 注意aue=4或者6是语音识别要求的格式，但是音频内容不是语音识别要求的自然人发音，所以识别效果会受影响。
            },
                tok = this.b_token.access_token;
            _text = encodeURI(encodeURI(_text.replace(/#/g, "")))
            var url = `http://tsn.baidu.com/text2audio?lan=${params.lan}&ctp=${params.ctp}&cuid=${this.IMEI}&tok=${tok}&tex=${_text}&vol=${params.vol}&per=${params.per}&spd=${params.spd}&pit=${params.pit}&aue=${params.aue}`
            this.audioCtx.src = url;
            this.audioCtx.play()
        }, _dd ? 1000 : 100)

    }
}