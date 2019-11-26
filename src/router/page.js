import summary from '@/pages/summary'
import profile from '@/pages/profile'
import tab from '@/components/tab'
import daymove from '@/pages/daymove'
export default [{
  path: '/user/:id',
  name: 'tab',
  component: tab,
  children: [
    {
      path: 'summary',
      name: 'summary',
      component: summary
    },
    {
      path: 'profile',
      name: 'profile',
      component: profile
    },
    {
      path: 'daymove',
      name: 'daymove',
      component: daymove
    }
  ]
}]
