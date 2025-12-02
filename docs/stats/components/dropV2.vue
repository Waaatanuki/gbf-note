<script setup lang="ts">
import { Icon } from '@iconify/vue'

const dataStr = ref(`[
  {
    "questId": "305711",
    "questName": "禁栄：ベルメルヴォルク",
    "questImage": "/sp/assets/summon/qm/2040446000_high.png",
    "total": 41348,
    "reward": [
      {
        "box": "3",
        "key": "10_627",
        "count": 114784
      },
      {
        "box": "3",
        "key": "10_633",
        "count": 54509
      },
      {
        "box": "3",
        "key": "10_533",
        "count": 50616
      },
      {
        "box": "11",
        "key": "10_627",
        "count": 25821
      },
      {
        "box": "16",
        "key": "10_627",
        "count": 18971
      },
      {
        "box": "11",
        "key": "10_533",
        "count": 10764
      },
      {
        "box": "16",
        "key": "10_533",
        "count": 7754
      },
      {
        "box": "4",
        "key": "10_627",
        "count": 7201
      },
      {
        "box": "11",
        "key": "88_1",
        "count": 1315
      },
      {
        "box": "4",
        "key": "10_533",
        "count": 1312
      },
      {
        "box": "16",
        "key": "88_1",
        "count": 855
      },
      {
        "box": "4",
        "key": "88_1",
        "count": 622
      },
      {
        "box": "4",
        "key": "4_3",
        "count": 580
      },
      {
        "box": "4",
        "key": "10_2002",
        "count": 490
      },
      {
        "box": "3",
        "key": "10_202",
        "count": 408
      },
      {
        "box": "11",
        "key": "73_11",
        "count": 309
      },
      {
        "box": "16",
        "key": "73_11",
        "count": 262
      },
      {
        "box": "11",
        "key": "37_40031",
        "count": 260
      },
      {
        "box": "11",
        "key": "37_40011",
        "count": 253
      },
      {
        "box": "11",
        "key": "37_40021",
        "count": 247
      },
      {
        "box": "4",
        "key": "10_2003",
        "count": 209
      },
      {
        "box": "16",
        "key": "37_40021",
        "count": 189
      },
      {
        "box": "16",
        "key": "37_40011",
        "count": 178
      },
      {
        "box": "16",
        "key": "37_40031",
        "count": 169
      },
      {
        "box": "11",
        "key": "2_2040446000",
        "count": 139
      },
      {
        "box": "4",
        "key": "37_40011",
        "count": 121
      },
      {
        "box": "16",
        "key": "2_2040446000",
        "count": 116
      },
      {
        "box": "4",
        "key": "37_40021",
        "count": 109
      },
      {
        "box": "4",
        "key": "37_40031",
        "count": 104
      },
      {
        "box": "3",
        "key": "73_11",
        "count": 70
      },
      {
        "box": "4",
        "key": "2_2040446000",
        "count": 62
      },
      {
        "box": "3",
        "key": "10_215",
        "count": 51
      },
      {
        "box": "4",
        "key": "37_40022",
        "count": 5
      },
      {
        "box": "4",
        "key": "37_40032",
        "count": 5
      },
      {
        "box": "16",
        "key": "37_40012",
        "count": 4
      },
      {
        "box": "16",
        "key": "37_40032",
        "count": 4
      },
      {
        "box": "16",
        "key": "37_40022",
        "count": 3
      },
      {
        "box": "4",
        "key": "37_40012",
        "count": 2
      }
    ]
  },
  {
    "questId": "305721",
    "questName": "禁命：ニフイヴィンテ",
    "questImage": "/sp/assets/summon/qm/2040447000_high.png",
    "total": 63211,
    "reward": [
      {
        "box": "3",
        "key": "10_628",
        "count": 164699
      },
      {
        "box": "3",
        "key": "10_634",
        "count": 82359
      },
      {
        "box": "3",
        "key": "10_533",
        "count": 75982
      },
      {
        "box": "16",
        "key": "10_628",
        "count": 48129
      },
      {
        "box": "11",
        "key": "10_628",
        "count": 37756
      },
      {
        "box": "16",
        "key": "10_533",
        "count": 19876
      },
      {
        "box": "11",
        "key": "10_533",
        "count": 16016
      },
      {
        "box": "4",
        "key": "10_628",
        "count": 8816
      },
      {
        "box": "16",
        "key": "88_1",
        "count": 2384
      },
      {
        "box": "4",
        "key": "10_533",
        "count": 1932
      },
      {
        "box": "11",
        "key": "88_1",
        "count": 1858
      },
      {
        "box": "4",
        "key": "88_1",
        "count": 949
      },
      {
        "box": "4",
        "key": "4_3",
        "count": 843
      },
      {
        "box": "4",
        "key": "10_2002",
        "count": 710
      },
      {
        "box": "3",
        "key": "10_202",
        "count": 627
      },
      {
        "box": "16",
        "key": "73_12",
        "count": 625
      },
      {
        "box": "16",
        "key": "37_40041",
        "count": 488
      },
      {
        "box": "16",
        "key": "37_40061",
        "count": 469
      },
      {
        "box": "11",
        "key": "73_12",
        "count": 454
      },
      {
        "box": "16",
        "key": "37_40051",
        "count": 427
      },
      {
        "box": "11",
        "key": "37_40051",
        "count": 403
      },
      {
        "box": "11",
        "key": "37_40041",
        "count": 382
      },
      {
        "box": "11",
        "key": "37_40061",
        "count": 358
      },
      {
        "box": "4",
        "key": "10_2003",
        "count": 298
      },
      {
        "box": "16",
        "key": "2_2040447000",
        "count": 233
      },
      {
        "box": "11",
        "key": "2_2040447000",
        "count": 204
      },
      {
        "box": "4",
        "key": "37_40061",
        "count": 145
      },
      {
        "box": "4",
        "key": "37_40051",
        "count": 131
      },
      {
        "box": "3",
        "key": "73_12",
        "count": 128
      },
      {
        "box": "4",
        "key": "37_40041",
        "count": 118
      },
      {
        "box": "4",
        "key": "2_2040447000",
        "count": 78
      },
      {
        "box": "3",
        "key": "10_215",
        "count": 62
      },
      {
        "box": "16",
        "key": "37_40062",
        "count": 18
      },
      {
        "box": "4",
        "key": "37_40062",
        "count": 11
      },
      {
        "box": "16",
        "key": "37_40042",
        "count": 11
      },
      {
        "box": "4",
        "key": "37_40042",
        "count": 10
      },
      {
        "box": "16",
        "key": "37_40052",
        "count": 6
      },
      {
        "box": "3",
        "key": "10_627",
        "count": 3
      },
      {
        "box": "4",
        "key": "37_40052",
        "count": 3
      },
      {
        "box": "16",
        "key": "10_627",
        "count": 2
      },
      {
        "box": "3",
        "key": "10_633",
        "count": 1
      },
      {
        "box": "11",
        "key": "10_627",
        "count": 1
      }
    ]
  }
]`)

const data = computed(() => {
  try {
    return JSON.parse(dataStr.value)
  }
  catch (e) {
    return []
  }
})

function getRatio(a = 0, b = 0) {
  if (b === 0)
    return '0.00'

  return ((a / b) * 100).toFixed(2)
}
</script>

<template>
  <el-input v-model="dataStr" my-5 :rows="10" type="textarea" />
  <div fc flex-col flex-wrap gap-4>
    <el-card v-for="quest in data" :key="quest.questId" :body-style="{ padding: '10px' }">
      <div flex items-center justify-start text-sm>
        <div mr-15px w-100px fc shrink-0 flex-col>
          <img w-100px :src="getQuestImg(quest.questImage)">
          <div mt-2px fc gap-2px>
            <Icon icon="game-icons:crossed-swords" />
            <div text-orange>
              {{ quest.total.toLocaleString() }}
            </div>
            <Icon icon="game-icons:crossed-swords" />
          </div>
        </div>
        <div fc flex-wrap gap-10 p-2>
          <div v-for="item in quest.reward" :key="item.key" relative shrink-0>
            <div :class="`ico-treasure-${item.box}-mini`" />
            <div>
              <el-badge :value="item.count" type="danger" :max="99999999" :offset="[-5, 0]">
                <img w-50px draggable="false" :src="getItemSrc(item.key)">
              </el-badge>

              <div text-center text-xs>
                {{ getRatio(item.count, quest.total) }}%
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>
