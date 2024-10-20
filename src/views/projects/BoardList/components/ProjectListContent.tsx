import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '@/components/ui/Spinner'
import Card from '@/components/ui/Card'
import { Link } from 'react-router-dom'
import { TbClipboardCheck, TbStarFilled } from 'react-icons/tb'
import { apiGetBoardsBySprintId, apiGetProjectDetails } from '@/services/ProjectService'
import { BoardDto, ProjectDetailsDto, SprintDto } from '@/@types/projects'
import ProgressionBar from './ProgressionBar'

const BoardLsitContent = () => {
    const { id } = useParams<{ id: string }>() // Get project id from route params
    const [projectDetails, setProjectDetails] = useState<BoardDto[] | null>(null)
    const [loading, setLoading] = useState(true)

    // Fetch project details based on the id from params
    useEffect(() => {
        const fetchProjectDetails = async () => {
            if (!id) return // If no id, do not attempt to fetch
            try {
                const projectDetails = await apiGetBoardsBySprintId(id)
                setProjectDetails(projectDetails)
            } catch (error) {
                console.error('Failed to fetch project details:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchProjectDetails()
    }, [id])

    if (loading) {
        return (
            <div className="my-4 mx-auto text-center flex justify-center">
                <Spinner size={40} />
            </div>
        )
    }

    if (!projectDetails || projectDetails?.length === 0) {
        return <p>No scrums (sprints) available.</p>
    }

    return (
        <div>
            <h5 className="mb-3">Sprints</h5>
            <div className="flex flex-col gap-4">
                {projectDetails?.map((sprint: BoardDto) => (
                    <Card key={sprint.id}>
                        <div className="grid gap-x-4 grid-cols-12">
                            <div className="my-1 sm:my-0 col-span-12 sm:col-span-3 md:col-span-3 lg:col-span-3 md:flex md:items-center">
                                <div className="flex flex-col">
                                    <h6 className="font-bold hover:text-primary">
                                        <Link to={`/boards/${id}`}>
                                            {sprint.name}
                                        </Link>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default BoardLsitContent