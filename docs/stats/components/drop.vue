<script setup lang="ts">
import { Icon } from '@iconify/vue'

const dataStr = ref(`[
  {
    "questId": "743441",
    "questName": "黄龍・黒麒麟 Proud+",
    "questImage": "/sp/quest/assets/2040157000_2040158000_proud.png",
    "total": 577,
    "reward": [
      {
        "key": "10_208",
        "count": 1343
      },
      {
        "key": "10_206",
        "count": 1310
      },
      {
        "key": "10_528",
        "count": 649
      },
      {
        "key": "10_530",
        "count": 644
      },
      {
        "key": "2_2040157000",
        "count": 8
      },
      {
        "key": "2_2040158000",
        "count": 7
      },
      {
        "key": "93_15",
        "count": 4
      },
      {
        "key": "91_4011",
        "count": 3
      }
    ]
  },
  {
    "questId": "301681",
    "questName": "靂天の境界、紫電の黎明",
    "questImage": "/sp/quest/assets/lobby/301681.png",
    "total": 21345,
    "reward": [
      {
        "key": "10_208",
        "count": 42238
      },
      {
        "key": "10_209",
        "count": 435
      },
      {
        "key": "10_6002",
        "count": 145
      },
      {
        "key": "10_6001",
        "count": 130
      },
      {
        "key": "10_6003",
        "count": 120
      },
      {
        "key": "10_6004",
        "count": 117
      },
      {
        "key": "2_2040158000",
        "count": 38
      },
      {
        "key": "91_4011",
        "count": 28
      },
      {
        "key": "17_20004",
        "count": 23
      },
      {
        "key": "93_15",
        "count": 22
      }
    ]
  },
  {
    "questId": "303231",
    "questName": "黄龍・黒麒麟ＨＬ",
    "questImage": "/sp/quest/assets/lobby/303231.png",
    "total": 29085,
    "reward": [
      {
        "key": "10_208",
        "count": 46418
      },
      {
        "key": "10_206",
        "count": 46227
      },
      {
        "key": "10_528",
        "count": 28866
      },
      {
        "key": "10_530",
        "count": 28694
      },
      {
        "key": "10_531",
        "count": 1147
      },
      {
        "key": "10_529",
        "count": 1098
      },
      {
        "key": "2_2040157000",
        "count": 772
      },
      {
        "key": "2_2040158000",
        "count": 762
      },
      {
        "key": "10_207",
        "count": 760
      },
      {
        "key": "10_209",
        "count": 724
      },
      {
        "key": "93_15",
        "count": 200
      },
      {
        "key": "91_4011",
        "count": 112
      },
      {
        "key": "91_4010",
        "count": 87
      },
      {
        "key": "17_20004",
        "count": 42
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
          <div v-for="item in quest.reward" :key="item.key" shrink-0>
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
