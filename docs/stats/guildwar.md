<script setup>
import { ref } from 'vue'
import EventCard from '../components/EventCard.vue'

const eventList = ref([
  {
    value: 'teamraid079',
    title: '第79回古战场(暗有利)',
    date: ['2025-09-07', '2025-09-14'],
    user: 5409,
    cow: { total: 451829, gold: 27541, meat: 9645675, summon: 16895, weapon: 812 },
    swarm: { total: 154624, meat: 36351192, summon: 170212, weapon: 4242 },
    quest: [
      { questId: '933971', questName: '90HELL', questImage: 'teamraid079_hell90', celestialWeapon: 526, revenantWeapon: 508, bigMeat: 237845, total: 190826 },
      { questId: '933981', questName: '95HELL', questImage: 'teamraid079_hell95', celestialWeapon: 99, revenantWeapon: 107, bigMeat: 70070, total: 44908 },
      { questId: '933991', questName: '100HELL', questImage: 'teamraid079_hell100', celestialWeapon: 563, revenantWeapon: 582, bigMeat: 424323, total: 175671 },
      { questId: '934001', questName: '150HELL', questImage: 'teamraid079_hell150', celestialWeapon: 1748, revenantWeapon: 1614, bigMeat: 1597039, total: 524651 },
      { questId: '934011', questName: '200HELL', questImage: 'teamraid079_hell200', celestialWeapon: 430, revenantWeapon: 448, bigMeat: 570773, total: 139309 },
      { questId: '934021', questName: '250HELL', questImage: 'teamraid079_hell250', celestialWeapon: 542, revenantWeapon: 525, bigMeat: 0, total: 159623 },
    ],
  },
  {
    value: 'teamraid078',
    title: '第78回古战场(火有利)',
    date: ['2025-06-21', '2025-06-28'],
    user: 5454,
    cow: { total: 462646, gold: 28151, meat: 9602102, summon: 16213, weapon: 594 },
    swarm: { total: 152159, meat: 35249739, summon: 158537, weapon: 4228 },
    quest: [
      { questId: '931171', questName: 'hell90', celestialWeapon: 1396, revenantWeapon: 1293, bigMeat: 750075, total: 751519 },
      { questId: '931181', questName: 'hell95', celestialWeapon: 157, revenantWeapon: 165, bigMeat: 117078, total: 81973 },
      { questId: '931191', questName: 'hell100', celestialWeapon: 1171, revenantWeapon: 1178, bigMeat: 881358, total: 367575 },
      { questId: '931201', questName: 'hell150', celestialWeapon: 1413, revenantWeapon: 1397, bigMeat: 1331033, total: 440771 },
      { questId: '931211', questName: 'hell200', celestialWeapon: 346, revenantWeapon: 308, bigMeat: 494966, total: 122614 },
      { questId: '931221', questName: 'hell250', celestialWeapon: 404, revenantWeapon: 418, bigMeat: 0, total: 125263 },
    ],
  },
  {
    value: 'teamraid077',
    title: '第77回古战场(光有利)',
    date: ['2025-04-07', '2025-04-14'],
    user: 5753,
    cow: { total: 1324032, gold: 80656, meat: 27750688, summon: 46378, weapon: 1618 },
    quest: [
      { questId: '929661', questName: 'hell90', celestialWeapon: 3000, revenantWeapon: 2889, bigMeat: 1488487, total: 1327888 },
      { questId: '929671', questName: 'hell95', celestialWeapon: 293, revenantWeapon: 288, bigMeat: 186127, total: 118343 },
      { questId: '929681', questName: 'hell100', celestialWeapon: 1132, revenantWeapon: 1142, bigMeat: 946266, total: 395440 },
      { questId: '929691', questName: 'hell150', celestialWeapon: 1468, revenantWeapon: 1427, bigMeat: 1491632, total: 495497 },
      { questId: '929701', questName: 'hell200', celestialWeapon: 491, revenantWeapon: 513, bigMeat: 753570, total: 181453 },
      { questId: '929711', questName: 'hell250', celestialWeapon: 569, revenantWeapon: 548, bigMeat: 2, total: 192098 },
    ],
  },
  {
    value: 'teamraid076',
    title: '第76回古战场(水有利)',
    date: ['2025-01-22', '2025-01-29'],
    user: 4302,
    cow: { total: 1279430, gold: 78402, meat: 26543399, summon: 44599, weapon: 1578 },
    quest: [
      { questId: '926761', questName: 'hell90', celestialWeapon: 2944, revenantWeapon: 2783, bigMeat: 1411422, total: 1218641 },
      {
        questId: '926771',
        questName: 'hell95',
        celestialWeapon: 162,
        revenantWeapon: 151,
        bigMeat: 109011,
        total: 71722,
      },
      {
        questId: '926781',
        questName: 'hell100',
        celestialWeapon: 1145,
        revenantWeapon: 1115,
        bigMeat: 907449,
        total: 382249,
      },
      {
        questId: '926791',
        questName: 'hell150',
        celestialWeapon: 1182,
        revenantWeapon: 1216,
        bigMeat: 1267107,
        total: 425881,
      },
      {
        questId: '926801',
        questName: 'hell200',
        celestialWeapon: 167,
        revenantWeapon: 181,
        bigMeat: 257587,
        total: 64854,
      },
      {
        questId: '926811',
        questName: 'hell250',
        celestialWeapon: 263,
        revenantWeapon: 329,
        bigMeat: 0,
        total: 101667,
      },
    ],
  },
  {
    value: 'teamraid075',
    title: '第75回古战场(风有利)',
    date: [
      '2024-11-07',
      '2024-11-14',
    ],
    user: 3546,
    cow: {
      total: 852992,
      gold: 52032,
      meat: 17895772,
      summon: 29940,
      weapon: 1066,
    },
    quest: [
      {
        questId: '924561',
        questName: 'hell90',
        celestialWeapon: 2731,
        revenantWeapon: 2607,
        bigMeat: 1309138,
        total: 1125345,
      },
      {
        questId: '924571',
        questName: 'hell95',
        celestialWeapon: 235,
        revenantWeapon: 243,
        bigMeat: 170586,
        total: 115779,
      },
      {
        questId: '924581',
        questName: 'hell100',
        celestialWeapon: 685,
        revenantWeapon: 742,
        bigMeat: 555169,
        total: 240613,
      },
      {
        questId: '924591',
        questName: 'hell150',
        celestialWeapon: 554,
        revenantWeapon: 547,
        bigMeat: 612276,
        total: 211304,
      },
      {
        questId: '924601',
        questName: 'hell200',
        celestialWeapon: 151,
        revenantWeapon: 124,
        bigMeat: 192324,
        total: 48022,
      },
      {
        questId: '924611',
        questName: 'hell250',
        celestialWeapon: 281,
        revenantWeapon: 253,
        bigMeat: 0,
        total: 92238,
      },
    ],
  },
  {
    value: 'teamraid074',
    title: '第74回古战场(土有利)',
    date: [
      '2024-09-07',
      '2024-09-14',
    ],
    user: 3318,
    cow: {
      total: 1035348,
      gold: 63880,
      meat: 19474895,
      summon: 38929,
      weapon: 1879,
    },
    quest: [
      {
        questId: '922461',
        questName: 'hell90',
        celestialWeapon: 4308,
        revenantWeapon: 3438,
        bigMeat: 1820851,
        total: 1373521,
      },
      {
        questId: '922471',
        questName: 'hell95',
        celestialWeapon: 305,
        revenantWeapon: 302,
        bigMeat: 184796,
        total: 110434,
      },
      {
        questId: '922481',
        questName: 'hell100',
        celestialWeapon: 775,
        revenantWeapon: 753,
        bigMeat: 489912,
        total: 202265,
      },
      {
        questId: '922491',
        questName: 'hell150',
        celestialWeapon: 763,
        revenantWeapon: 686,
        bigMeat: 655175,
        total: 212515,
      },
      {
        questId: '922501',
        questName: 'hell200',
        celestialWeapon: 303,
        revenantWeapon: 246,
        bigMeat: 335710,
        total: 81246,
      },
      {
        questId: '922511',
        questName: 'hell250',
        celestialWeapon: 330,
        revenantWeapon: 339,
        bigMeat: 0,
        total: 84781,
      },
    ],
  },
  {
    value: 'teamraid073',
    title: '第73回古战场(暗有利)',
    date: [
      '2024-06-21',
      '2024-06-28',
    ],
    user: 2650,
    cow: {
      total: 1471242,
      gold: 89126,
      meat: 15830563,
      summon: 54798,
      weapon: 2656,
    },
    quest: [
      {
        questId: '920261',
        questName: 'hell90',
        celestialWeapon: 2883,
        revenantWeapon: 2686,
        total: 1217737,
      },
      {
        questId: '920271',
        questName: 'hell95',
        celestialWeapon: 842,
        revenantWeapon: 797,
        total: 340987,
      },
      {
        questId: '920281',
        questName: 'hell100',
        celestialWeapon: 105,
        revenantWeapon: 100,
        total: 23442,
      },
      {
        questId: '920291',
        questName: 'hell150',
        celestialWeapon: 489,
        revenantWeapon: 533,
        total: 187959,
      },
      {
        questId: '920301',
        questName: 'hell200',
        celestialWeapon: 624,
        revenantWeapon: 606,
        total: 195655,
      },
    ],
  },
])
</script>

# 古战场掉落统计记录

## 79回古战场(暗有利)

::: raw
<EventCard :event="eventList.find(e=>e.value==='teamraid079')"/>
:::

## 78回古战场(火有利)

::: raw
<EventCard :event="eventList.find(e=>e.value==='teamraid078')"/>
:::

## 77回古战场(光有利)

::: raw
<EventCard :event="eventList.find(e=>e.value==='teamraid077')"/>
:::

## 76回古战场(水有利)

::: raw
<EventCard :event="eventList.find(e=>e.value==='teamraid076')"/>
:::

## 75回古战场(风有利)

::: raw
<EventCard :event="eventList.find(e=>e.value==='teamraid075')"/>
:::

## 74回古战场(土有利)

::: raw
<EventCard :event="eventList.find(e=>e.value==='teamraid074')"/>
:::

## 73回古战场(暗有利)

::: raw
<EventCard :event="eventList.find(e=>e.value==='teamraid073')"/>
:::
