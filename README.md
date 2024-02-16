# PlayGround

이것저것 시도해보고 재밌어 보이는거 만들어 보는곳

## PAGES

### GridLayout

list: 그리드 리스트 배열
childRect: 그리드에 들어갈 자식요소의 width, height값(px) format :: { width: 0, height: 0 }
row: 그리드의 열갯수
gapRow: 그리드 자식요소의 좌우간격(px)
gapColumn: 그리드 자식요소의 상하간격(px)
v-slot="props": list의 각 인덱스 아이템 데이터

## Project Setup

```sh
yarn install
```

### Compile and Hot-Reload for Development

```sh
yarn dev
```

### Compile and Minify for Production

```sh
yarn build
```
