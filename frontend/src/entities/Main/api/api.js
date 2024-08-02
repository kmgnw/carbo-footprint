import { baseUrl } from "../../../shared/config/baseurl";

export const fetchAttendanceCount = async (setCount) => {
    const token = window.sessionStorage.getItem('token');
    
    try {
        const response = await fetch(`${baseUrl}/attendance`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const res = data.result.attendance_streak_count ?? 0;
        setCount(res)
        
    } catch (error) {
        console.error(error);
    }
};

export const fetchSchedules = async (setAugust, setSeptember) => {
    setAugust(new Array(31).fill(null).map(() => ([
        {
            title: '',
            firstMeal: [],
            secondMeal: [],
            thirdMeal: [],
            extraMeal: [],
            workoutTime: '',
            stepCount: ''
        }
    ])))

    setSeptember(new Array(31).fill(null).map(() => ([
        {
            title: '',
            firstMeal: [],
            secondMeal: [],
            thirdMeal: [],
            extraMeal: [],
            workoutTime: '',
            stepCount: ''
        }
    ])))

    const token = window.sessionStorage.getItem('token');
    
    try {
        const response = await fetch(`${baseUrl}/api/schedules`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        data.result.august_schedule_list.forEach((e,i)=>{
            setAugust((prev) => {
                
                const list = prev.map(innerList => Array.isArray(innerList) ? [...innerList] : innerList);
            
                if(list[e.day-1].length === 1 && list[e.day-1][0].title === ''){
                    list[e.day-1][0] = e    
                }else{
                    list[e.day-1].push(e);
                }
                return list;
            });
        })

        data.result.september_schedule_list.forEach((e,i)=>{
            setSeptember((prev) => {
                
                const list = prev.map(innerList => Array.isArray(innerList) ? [...innerList] : innerList);
            
                if(list[e.day-1].length === 1 && list[e.day-1][0].title === ''){
                    list[e.day-1][0] = e    
                }else{
                    list[e.day-1].push(e);
                }
                return list;
            });
        })
        
        
        
    } catch (error) {
        console.error(error);
    }
};