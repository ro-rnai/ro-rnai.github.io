const template=`FollowDis=2
MoveDelay=500
RadiusAggr=12
SearchMode={{64,128,0,256,0,0,-1,-1},{50,200,-800,25,30,-45,-1,1}}
SearchSetting=SearchMode[1]
WeakTargets={}

Skill={}

Skill[#Skill+1]={}
Skill[#Skill].id=0
Skill[#Skill].lv=1
Skill[#Skill].target=0
Skill[#Skill].when=1
Skill[#Skill].times=1
Skill[#Skill].delay=0
Skill[#Skill].sp={0,100}
Skill[#Skill].nMyEnemy=0
Skill[#Skill].nOwnerEnemy=0
Skill[#Skill].nRangeEnemy=0
Skill[#Skill].chase=1
Skill[#Skill].stemp=0
Skill[#Skill].count=0
`;
const idInfo={
    '生命體': {
        '8001': '治癒之手',
        '8002': '輕捷移動',
        '8004': '智力變換',
        '8005': '位置互換',
        '8006': '防禦力',
        '8008': '血的貪求',
        '8009': '月光',
        '8010': '橫越速度',
        '8011': '緊急迴避',
        '8012': 'SBR44',
        '8013': '善變',
        '8014': '混亂的祈福',
        '8016': '變更指示',
    },
    '生命體S': {
        '8018': '招喚蟲團',
        '8019': '麻痺針',
        '8020': '劇毒粉',
        '8021': '鎮痛劑',
        '8022': '重生之光',
        '8023': '瞬間增壓',
        '8024': '音速刀刃',
        '8025': '血腥魔刀',
        '8026': '沉默微風',
        '8027': '型態轉換',
        '8028': '音速利爪',
        '8029': '銀脈衝擊',
        '8030': '午夜狂暴',
        '8031': '鋼鐵之角',
        '8032': '黃金腳跟',
        '8033': '岩壁',
        '8034': '聖刺',
        '8035': '攻擊準備',
        '8036': '粉碎骨折',
        '8037': '連續突破組合',
        '8038': '永恆快速組合',
        '8039': '岩漿流動',
        '8040': '花崗岩鎧甲',
        '8041': '熔岩滑動',
        '8042': '火山塵暴',
        '8043': '火山灰',
    },
    '傭兵': {
        '8201': '狂擊',
        '8202': '怒爆',
        '8203': '怪物互擊',
        '8204': '雙劍格擋',
        '8205': '反射盾',
        '8206': '狂怒之槍',
        '8207': '二連矢',
        '8208': '箭雨',
        '8209': '滑動陷阱',
        '8210': '地雷陷阱',
        '8211': '睡魔陷阱',
        '8212': '霜凍陷阱',
        '8213': '陷阱移除',
        '8214': '衝鋒箭',
        '8215': '銳利射擊',
        '8216': '連刺攻擊',
        '8217': '騎乘攻擊',
        '8218': '螺旋刺擊',
        '8219': '光之盾',
        '8220': '自動防禦',
        '8221': '犧牲',
        '8222': '莫那的祝福',
        '8223': '加速武器',
        '8224': '火狩',
        '8225': '撞擊',
        '8226': '恢復',
        '8227': '補給',
        '8228': '祝福',
        '8229': '復原',
        '8230': '精神治癒',
        '8231': '壓制',
        '8232': '挑釁',
        '8233': '狂暴狀態',
        '8234': '緩速術',
        '8235': '替罪羔羊',
        '8236': '沉默之術',
        '8237': '怪物情報',
    }
}
document.addEventListener('DOMContentLoaded', ()=>{
    let tabs=document.querySelector('#filterType');
    let all={};
    for(type in idInfo) {
        let li=document.createElement('li');
        li.setAttribute('class', 'nav-item');
        let a=document.createElement('span');
        a.textContent=type;
        a.setAttribute('class', 'nav-link pointer');
        a.setAttribute('onclick', 'showId(this.textContent)');
        li.appendChild(a);
        tabs.appendChild(li);
        for(id in idInfo[type]) {
            all[id]=idInfo[type][id];
        }
    }
    idInfo['全部']=all;
    showId('全部');
    newOne();
});
function showId(type)
{
    let list=document.querySelectorAll('#filterType>li>span');
    //更新選單 css
    Array.from(list).forEach((span)=>{
        span.classList.toggle('active', span.textContent===type);
    });
    let showDiv=document.querySelector('#showId');
    let showObj=idInfo[type];
    let html='<ul class="list-group-flush">';
    Object.keys(showObj).sort((a,b)=>{
        return parseInt(a,10)-parseInt(b,10);
    }).forEach(id=>{
        let str=showObj[id];
        html+=`<li class="list-group-item">${id} ${str}</li>`;
    });
    html+='</ul>';
    showDiv.innerHTML=html;
}
function newOne()
{
    document.querySelector('#editor').value=template;
}
function save()
{
    let data=document.querySelector('#editor').value
    let a_tag=document.createElement('a');
    a_tag.setAttribute('download', `新文件.lua`);
    a_tag.href=URL.createObjectURL(new Blob([data], {type:'plain/text'}));
    a_tag.click();
}
