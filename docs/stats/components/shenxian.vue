<script setup lang="ts">
const tableData = [
  {
    title: '第一季神仙杯统计结果',
    data: [
      {
        date: '2021-11',
        火: { time: '2:49', count: 9 },
        水: { time: '2:29', count: 13 },
        土: { time: '2:37', count: 24 },
        风: { time: '1:44', count: 42 },
        光: { time: '2:19', count: 15 },
        暗: { time: '2:21', count: 16 },
      },
      {
        date: '2023-04',
        火: { time: '1:42', count: 6 },
        水: { time: '1:09', count: 9 },
        土: { time: '1:09', count: 11 },
        风: { time: '1:47', count: 23 },
        光: { time: '0:53', count: 20 },
        暗: { time: '1:09', count: 39 },
      },
      {
        date: '2024-04',
        火: { time: '0:58', count: 8 },
        水: { time: '0:47', count: 10 },
        土: { time: '0:44', count: 11 },
        风: { time: '0:52', count: 1 },
        光: { time: '0:34', count: 11 },
        暗: { time: '0:49', count: 6 },
      },
      {
        date: '2025-04',
        火: { time: '0:28', count: 13 },
        水: { time: '0:27', count: 10 },
        土: { time: '0:27', count: 16 },
        风: { time: '0:29', count: 5 },
        光: { time: '0:25', count: 11 },
        暗: { time: '0:30', count: 10 },
      },
    ],

  },
  {
    title: '第二季神仙杯统计结果',
    data: [{
      date: '2025-07',
      火: { time: '2:38', lou: 32 },
      水: { time: '2:07', lou: 40 },
      土: { time: '2:20', lou: 28 },
      风: { time: '2:11', lou: 35 },
      光: { time: '2:24', lou: 14 },
      暗: { time: '2:46', lou: 39 },
    }],
  },
]

const column = ['火', '水', '土', '风', '光', '暗']

function timeToSeconds(timeStr: string) {
  const [minutes, seconds] = timeStr.split(':').map(Number)
  return minutes * 60 + seconds
}

function isFastestAttr(row: any, attr: string) {
  let fastestTime = Infinity
  const currentTime = timeToSeconds(row[attr].time)

  column.forEach((col) => {
    const seconds = timeToSeconds(row[col].time)
    if (seconds < fastestTime) {
      fastestTime = seconds
    }
  })

  return currentTime === fastestTime
}

// function isMostAttr(row: any, attr: string) {
//   const maxCount = Math.max(...column.map(col => row[col].count))
//   return row[attr].count === maxCount
// }
</script>

<template>
  <div fc flex-col gap-10>
    <el-table v-for="series, index in tableData" :key="index" :data="series.data" :border="true" style="width: 600px;">
      <el-table-column :label="series.title" align="center">
        <el-table-column prop="date" label="日期" align="center">
          <template #default="{ row, $index }">
            <div flex flex-col>
              <div>第{{ ['一', '二', '三', '四', '五'][$index] }}届</div>
              <div>{{ row.date }}</div>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          v-for="attr in column" :key="attr" :label="attr"
          :label-class-name="`header-${attr}`"
          align="center"
          width="80"
        >
          <!-- <el-table-column label="最速" align="center"> -->
          <template #default="{ row }">
            <div :class="{ 'bg-fastest': isFastestAttr(row, attr) }">
              {{ row[attr].time }}
            </div>
          </template>
          <!-- </el-table-column> -->
          <!-- <el-table-column label="人数" align="center">
            <template #default="{ row }">
              <div :class="{ 'bg-most': isMostAttr(row, attr) }">
                {{ row[attr].count }}
              </div>
            </template>
          </el-table-column> -->
        </el-table-column>
      </el-table-column>
    </el-table>
  </div>
</template>

<style>
.header-火 {
  background-color: #f56c6c !important;
  color: white;
}
.header-水 {
  background-color: #409eff !important;
  color: white;
}
.header-土 {
  background-color: #8e633f !important;
  color: white;
}
.header-风 {
  background-color: #67c23a !important;
  color: white;
}
.header-光 {
  background-color: #fcd34d !important;
  color: white;
}
.header-暗 {
  background-color: #7e22ce !important;
  color: white;
}

.bg-fastest {
  background: linear-gradient(135deg, #ffd700 0%, #ffa500 100%) !important;
  color: #333 !important;
  font-weight: bold;
  border-radius: 4px;
  padding: 2px 5px;
}

.bg-most {
  background: linear-gradient(135deg, #4caf50 0%, #2e7d32 100%) !important;
  color: white !important;
  font-weight: bold;
  border-radius: 4px;
  padding: 2px 5px;
}
</style>
