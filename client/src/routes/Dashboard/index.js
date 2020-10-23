import React from 'react'
import styled from 'styled-components'
import FileUploader from '../../components/FileUploader'
import FilesTable from '../../components/FilesTable'
import { colors } from '../../styles'

const Dashboard = () => {
  const onFileUpload = () => {}
  return (
    <DashboardContainer>
      <UploaderSection>
        <FileUploader successCallback={onFileUpload} />
      </UploaderSection>
      <ContentSection>
        <FilesTable />
      </ContentSection>
    </DashboardContainer>
  )
}

export default Dashboard

const DashboardContainer = styled.section`
  padding: 2rem;
`

const UploaderSection = styled.section``

const ContentSection = styled.div`
  padding-top: 4rem;
  border-top: 1px solid ${colors.border};
`
